import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/Hero";
import ServiceMatrix from "@/components/home/ServiceMatrix";
import CapabilityBands from "@/components/home/CapabilityBands";
import Process from "@/components/home/Process";
import CtaBand from "@/components/site/CtaBand";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Parenti Media Solutions — Websites, Livestreams, Sound Systems & Training" },
      {
        name: "description",
        content:
          "Media services for organizations: custom websites from $1,000, domain and email setup, social media, livestream and broadcast systems, audio engineering, sound system tuning, and training for the team that runs it.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ServiceMatrix />
      <CapabilityBands />
      <Process />
      <CtaBand />
    </>
  );
}