import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const bands = [
  {
    id: "web",
    kicker: "Websites & digital",
    title: "Sites built to load fast and sell your work.",
    copy: "A website should be the clearest thing your organization owns: fast, readable on any device, and easy to update once the build is done. Fixed prices mean you know the cost before we start, and the result is documented so your team can keep it running.",
    points: [
      "Fixed-price custom websites from $1,000",
      "Domain, email, and hosting setup",
      "Responsive design that works on every device",
      "Documentation and training so your team can update it",
    ],
    image:
      "https://media.base44.com/images/public/6b024dc75191b06f08c1b92c/3d7ab75c4_generated_image.png",
    imageAlt: "Modern website interface on a monitor in a dark studio with red accent lighting",
    reverse: false,
  },
  {
    id: "streaming",
    kicker: "Live streaming",
    title: "Broadcast that does not fall over on show day.",
    copy: "A stream is only as good as the weakest link: the upload, the encoder, the audio feed, the operator. Every piece gets tested before you go live, and the person running it gets trained on it.",
    points: [
      "Single-camera to multi-camera systems",
      "Audio pulled cleanly from your sound system",
      "YouTube, Facebook, Vimeo, Twitch, or custom RTMP",
      "Network and bandwidth readiness checks",
    ],
    image:
      "https://media.base44.com/images/public/6b024dc75191b06f08c1b92c/f450014d5_generated_image.png",
    imageAlt: "Rack-mounted streaming encoder and video switcher with red status lights",
    reverse: false,
  },
  {
    id: "audio",
    kicker: "Audio engineering",
    title: "Sound you can hear in every seat.",
    copy: "Rooms fight back. Speakers get hung where the ladder reached, feedback lives in the front row, and the back of the room gets nothing but rumble. Measurement, tuning, and gain structure fix most of it before new gear does.",
    points: [
      "System design, installation, and calibration",
      "Measurement-based tuning and gain structure",
      "Live mixing for services, concerts, and conferences",
      "Recording, mixing, mastering, and podcast production",
    ],
    image:
      "https://media.base44.com/images/public/6b024dc75191b06f08c1b92c/1c4c7f6f4_generated_image.png",
    imageAlt: "Studio condenser microphone lit by a red rim light",
    reverse: true,
  },
];

export default function CapabilityBands() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl divide-y divide-border px-5 lg:px-8">
        {bands.map((band) => (
          <div
            key={band.id}
            className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24"
          >
            <div className={band.reverse ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src={band.image}
                  alt={band.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  fittingType="fill"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className={band.reverse ? "lg:order-1" : ""}>
              <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-primary">
                {band.kicker}
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1] tracking-[-0.025em] sm:text-4xl">
                {band.title}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {band.copy}
              </p>
              <ul className="mt-7 grid gap-2.5">
                {band.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                hash={band.id}
                className="group mt-8 inline-flex min-h-[44px] items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-primary"
              >
                Full service details
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}