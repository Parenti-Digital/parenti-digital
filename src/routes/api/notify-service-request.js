import { createFileRoute } from "@tanstack/react-router";
import { requireUserRoute } from "@/lib/auth-middleware";

export const Route = createFileRoute("/api/notify-service-request")({
  server: {
    middleware: [requireUserRoute],
    handlers: {
      POST: async ({ request, context }) => {
        if (context.user?.role !== "admin") {
          return Response.json({ error: "Forbidden" }, { status: 403 });
        }
        const body = await request.json();
        const { name, email, phone, organization, service, message } = body ?? {};

        await context.getBase44().asServiceRole.integrations.Core.SendEmail({
          to: "MSParentiJr@gmail.com",
          template_name: "NewServiceRequest",
          category: "transactional",
          variables: {
            name: name || "",
            email: email || "",
            phone: phone || "",
            organization: organization || "",
            service: service || "",
            message: message || "",
            admin_url: "https://parentidigital.msparenti.com/admin",
          },
        });

        return Response.json({ sent: true });
      },
    },
  },
});