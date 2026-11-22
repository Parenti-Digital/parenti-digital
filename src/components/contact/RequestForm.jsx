import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { serviceGroups } from "@/lib/services-data";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  service: "",
  message: "",
};

const fieldClass =
  "min-h-[46px] rounded-none border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0";

export default function RequestForm() {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      setError("First name, last name, email, and phone are required.");
      return;
    }
    setSubmitting(true);
    try {
      const { firstName, lastName, ...rest } = form;
      await base44.entities.ServiceRequest.create({
        ...rest,
        name: `${firstName} ${lastName}`.trim(),
        status: "new",
      });
      setSent(true);
      setForm(emptyForm);
    } catch (err) {
      setError("Something went wrong sending that. Try again, or call or email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="border border-primary/40 bg-card/60 p-8">
        <p className="mono-label text-primary">Request received</p>
        <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.02em]">
          That came through.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          You will get a reply with next steps. If it is urgent, call or email directly and it will
          get handled faster.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex min-h-[44px] items-center border border-border px-5 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card/40 p-6 lg:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="firstName" className="mono-label text-foreground">
            First name *
          </Label>
          <Input
            id="firstName"
            value={form.firstName}
            onChange={update("firstName")}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="lastName" className="mono-label text-foreground">
            Last name *
          </Label>
          <Input
            id="lastName"
            value={form.lastName}
            onChange={update("lastName")}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="email" className="mono-label text-foreground">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="phone" className="mono-label text-foreground">
            Phone *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="organization" className="mono-label text-foreground">
            Organization
          </Label>
          <Input
            id="organization"
            value={form.organization}
            onChange={update("organization")}
            className={`mt-2 ${fieldClass}`}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="service" className="mono-label text-foreground">
            What do you need?
          </Label>
          <select
            id="service"
            value={form.service}
            onChange={update("service")}
            className="mt-2 flex h-[46px] w-full border border-border bg-background px-3 font-body text-sm text-foreground focus:border-primary focus:outline-none"
          >
            <option value="">Select a service</option>
            {serviceGroups.map((group) => (
              <option key={group.id} value={group.title}>
                {group.number} · {group.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message" className="mono-label text-foreground">
            Details
          </Label>
          <Textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="What you have now, what is not working, and what you want it to do."
            className={`mt-2 rounded-none ${fieldClass}`}
          />
        </div>
      </div>

      {error ? (
        <p role="alert" className="mt-5 border border-destructive/60 bg-destructive/10 px-4 py-3 text-sm text-foreground">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center bg-primary px-6 font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}