"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Command } from "cmdk";
import {
  Home,
  User,
  Briefcase,
  LayoutGrid,
  Github,
  Mail,
  Download,
  Copy,
  BookOpen,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { mainNav } from "@/data/navigation";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navIcons: Record<string, typeof Home> = {
  home: Home,
  user: User,
  briefcase: Briefcase,
  "layout-grid": LayoutGrid,
  github: Github,
  "book-open": BookOpen,
  mail: Mail,
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [search, setSearch] = useState("");

  function go(href: string) {
    router.push(href);
    onOpenChange(false);
    setSearch("");
  }

  const emailLink = socials.find((s) => s.label === "Email");
  const githubLink = socials.find((s) => s.label === "GitHub");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0">
        <Command
          shouldFilter
          className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
        >
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Jump to a section, project, or action…"
              className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Command.List className="max-h-[340px] overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigate">
              {mainNav.map((item) => {
                const Icon = navIcons[item.icon] ?? Home;
                return (
                  <Command.Item
                    key={item.href}
                    onSelect={() => go(item.href)}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-surface-2"
                  >
                    <Icon className="h-4 w-4 text-brand-cyan" />
                    {item.label}
                  </Command.Item>
                );
              })}
            </Command.Group>

            <Command.Group heading="Projects">
              {projects.map((p) => (
                <Command.Item
                  key={p.slug}
                  onSelect={() => go(`/projects/${p.slug}`)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-surface-2"
                >
                  <LayoutGrid className="h-4 w-4 text-brand-purple" />
                  {p.name}
                  <span className="ml-auto font-mono text-[11px] text-muted-foreground">{p.tagline}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions">
              <Command.Item
                onSelect={() => {
                  window.open("/resume.pdf", "_blank");
                  onOpenChange(false);
                }}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-surface-2"
              >
                <Download className="h-4 w-4 text-brand-cyan" />
                Download Resume
              </Command.Item>
              {emailLink && (
                <Command.Item
                  onSelect={() => {
                    navigator.clipboard.writeText(emailLink.handle);
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-surface-2"
                >
                  <Copy className="h-4 w-4 text-brand-cyan" />
                  Copy Email Address
                </Command.Item>
              )}
              {githubLink && (
                <Command.Item
                  onSelect={() => {
                    window.open(githubLink.href, "_blank");
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-surface-2"
                >
                  <Github className="h-4 w-4 text-brand-cyan" />
                  Open GitHub Profile
                </Command.Item>
              )}
              <Command.Item
                onSelect={() => {
                  setTheme(resolvedTheme === "light" ? "dark" : "light");
                  onOpenChange(false);
                }}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-surface-2"
              >
                {resolvedTheme === "light" ? (
                  <Moon className="h-4 w-4 text-brand-cyan" />
                ) : (
                  <Sun className="h-4 w-4 text-brand-cyan" />
                )}
                Toggle Theme
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
