"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CodeNestProvider,
  Heroui,
  HeroPrimaryButton,
  ShadcnButton,
  ThemeToggle,
  THEME_PRESET_IDS,
  useCodeNestTheme,
  type ThemePresetId,
} from "@code-nest/ui";

function PresetToolbar() {
  const { preset, setPreset } = useCodeNestTheme();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted-foreground text-sm font-medium">
        Preset
      </span>
      {THEME_PRESET_IDS.map((id: ThemePresetId) => (
        <ShadcnButton
          key={id}
          size="sm"
          variant={preset === id ? "default" : "outline"}
          type="button"
          onClick={() => setPreset(id)}
        >
          {id}
        </ShadcnButton>
      ))}
    </div>
  );
}

export default function ShowcasePage() {
  return (
    <CodeNestProvider defaultPreset="slate">
      <div className="bg-background min-h-screen">
        <header className="border-border bg-card/30 supports-[backdrop-filter]:bg-card/20 sticky top-0 z-10 border-b backdrop-blur">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-4 py-3">
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wide">
                @code-nest/ui
              </p>
              <p className="text-foreground text-sm font-semibold">
                Theme preview
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <PresetToolbar />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-3xl space-y-8 px-4 py-10">
          <section className="space-y-2">
            <h1 className="text-foreground text-3xl font-semibold tracking-tight">
              HeroUI + shadcn tokens
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                CodeNestProvider
              </code>{" "}
              wires{" "}
              <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                next-themes
              </code>
              ,{" "}
              <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                HeroUIProvider
              </code>
              , and shadcn-style CSS variables (token maps from{" "}
              <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                @code-nest/themes/browser
              </code>
              , inlined in this UI build). Switch preset and light/dark below — portfolio stays untouched.
            </p>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Shadcn-style primitives</CardTitle>
              <CardDescription>
                Tailwind + CVA + CSS variables on{" "}
                <code className="font-mono">:root</code>.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <ShadcnButton type="button">Primary</ShadcnButton>
              <ShadcnButton type="button" variant="secondary">
                Secondary
              </ShadcnButton>
              <ShadcnButton type="button" variant="outline">
                Outline
              </ShadcnButton>
              <ShadcnButton type="button" variant="ghost">
                Ghost
              </ShadcnButton>
              <ShadcnButton type="button" variant="destructive">
                Destructive
              </ShadcnButton>
            </CardContent>
            <CardFooter className="text-muted-foreground text-xs">
              Use in apps with the same Tailwind color map as this showcase
              (<code className="font-mono">hsl(var(--primary))</code>, etc.).
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>HeroUI bridge</CardTitle>
              <CardDescription>
                Primary button follows the active preset via inline tint (no
                portfolio coupling).
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <HeroPrimaryButton radius="md">Hero primary</HeroPrimaryButton>
              <HeroPrimaryButton radius="md" variant="bordered">
                Bordered
              </HeroPrimaryButton>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>All HeroUI via namespace</CardTitle>
              <CardDescription>
                <code className="font-mono">Heroui</code> re-exports everything
                from <code className="font-mono">@heroui/react</code> (Modal,
                Navbar, Table, …) without clashing with shadcn{" "}
                <code className="font-mono">Card</code> /{" "}
                <code className="font-mono">ShadcnButton</code>.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Heroui.Chip color="primary" variant="flat">
                Chip
              </Heroui.Chip>
              <Heroui.Spinner size="sm" />
              <Heroui.Button size="sm" variant="light">
                Raw HeroUI Button
              </Heroui.Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </CodeNestProvider>
  );
}
