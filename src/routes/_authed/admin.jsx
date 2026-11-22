import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { base44 } from "@/api/base44Client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader2, LogOut, Mail, Phone, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authed/admin")({
  head: () => ({
    meta: [{ title: "Service Requests — Parenti Digital" }],
  }),
  component: AdminPage,
});

const statuses = ["new", "contacted", "quoted", "won", "lost"];

const statusStyles = {
  new: "border-primary/60 text-primary",
  contacted: "border-yellow-500/50 text-yellow-400",
  quoted: "border-purple-500/50 text-purple-300",
  won: "border-green-500/50 text-green-400",
  lost: "border-border text-muted-foreground",
};

function AdminPage() {
  const { user } = Route.useRouteContext();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const query = filter === "all" ? {} : { status: filter };
      const page = await base44.entities.ServiceRequest.filter(query, {
        sort: "-created_date",
        limit: 100,
      });
      setRequests(page.items ?? []);
    } catch (err) {
      setError("Could not load requests.");
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    load();
  }, [load]);

  const updateStatus = async (id, status) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    await base44.entities.ServiceRequest.update(id, { status });
  };

  const deleteRequest = async (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    try {
      await base44.entities.ServiceRequest.delete(id);
    } catch (err) {
      load();
    }
  };

  if (user?.role !== "admin") {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5">
        <p className="mono-label text-primary">Restricted</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.02em]">
          This area is for the site owner.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Signed in as {user?.email}. Service requests are visible to the account owner only.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-[44px] w-fit items-center border border-border px-5 font-mono text-[12px] uppercase tracking-[0.22em] hover:border-primary/60 hover:text-primary"
        >
          Back to the site
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <div>
            <p className="mono-label text-primary">Owner console</p>
            <h1 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.02em]">
              Service requests
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex min-h-[40px] items-center border border-border px-4 font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground hover:border-primary/60 hover:text-primary"
            >
              View site
            </Link>
            <button
              type="button"
              onClick={() => base44.auth.logout("/")}
              className="inline-flex min-h-[40px] items-center gap-2 border border-border px-4 font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground hover:border-primary/60 hover:text-primary"
            >
              <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-wrap gap-2">
          {["all", ...statuses].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilter(status)}
              className={`inline-flex min-h-[38px] items-center border px-3 font-mono text-[12px] uppercase tracking-[0.18em] transition-colors ${
                filter === status
                  ? "border-primary bg-primary font-semibold text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {error ? (
          <p className="mt-6 border border-destructive/60 bg-destructive/10 px-4 py-3 text-sm">
            {error}
          </p>
        ) : null}

        {loading ? (
          <div className="flex items-center gap-3 py-16 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
            Loading requests
          </div>
        ) : requests.length === 0 ? (
          <div className="mt-8 border border-border bg-card/40 p-8">
            <h2 className="font-display text-lg font-bold">Nothing here yet.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Requests submitted through the contact form land here.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-px bg-border">
            {requests.map((request) => (
              <article key={request.id} className="bg-background p-5 lg:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-base font-bold tracking-[-0.01em]">
                      {request.name}
                      {request.organization ? (
                        <span className="text-muted-foreground"> · {request.organization}</span>
                      ) : null}
                    </h2>
                    <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                      {request.service || "No service selected"}
                      {request.budget ? ` · ${request.budget}` : ""}
                      {request.timeline ? ` · ${request.timeline}` : ""}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.18em] ${
                      statusStyles[request.status] || statusStyles.new
                    }`}
                  >
                    {request.status || "new"}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-foreground/85">
                  {request.message}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${request.email}`}
                    className="inline-flex min-h-[36px] items-center gap-2 text-xs text-muted-foreground hover:text-primary"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    {request.email}
                  </a>
                  {request.phone ? (
                    <a
                      href={`tel:${request.phone.replace(/[^\d+]/g, "")}`}
                      className="inline-flex min-h-[36px] items-center gap-2 text-xs text-muted-foreground hover:text-primary"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      {request.phone}
                    </a>
                  ) : null}
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                    {request.created_date
                      ? new Date(request.created_date).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                          timeZone: "America/Chicago",
                        })
                      : ""}
                  </span>

                  <div className="ml-auto flex items-center gap-3">
                    <label className="flex items-center gap-2">
                      <span className="sr-only">Status for {request.name}</span>
                      <select
                        value={request.status || "new"}
                        onChange={(event) => updateStatus(request.id, event.target.value)}
                        className="h-[36px] border border-border bg-background px-2 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground focus:border-primary focus:outline-none"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </label>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button
                          type="button"
                          aria-label={`Delete request from ${request.name}`}
                          className="inline-flex h-[36px] w-[36px] items-center justify-center border border-border text-muted-foreground transition-colors hover:border-destructive/70 hover:text-destructive"
                        >
                          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete this request?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This permanently removes the submission from{" "}
                            <span className="text-foreground">{request.name}</span>. This cannot be
                            undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteRequest(request.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}