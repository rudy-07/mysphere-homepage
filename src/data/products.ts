import { Cloud, Camera, Music, Link, Wallet, Upload, Share2, Search, Brain, Clock, Monitor, Shield, Smartphone, Video, Bell, Activity, Eye, Heart, ListMusic, Palette, DollarSign, PiggyBank, TrendingUp, MessageSquare, Clipboard, BellRing, ScanSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductStep {
  step: number;
  title: string;
  description: string;
}

export interface Platform {
  name: string;
  status: "Active" | "In Development" | "Planned";
}

export interface ProductData {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  status: "Active" | "In Development" | "Desktop App Available" | "Planned";
  statusColor: string;
  url?: string;
  downloadUrl?: string;
  features: ProductFeature[];
  howItWorks: ProductStep[];
  integrations: string[];
  platforms: Platform[];
}

export const productsData: Record<string, ProductData> = {
  mycloud: {
    slug: "mycloud",
    name: "myCloud",
    icon: Cloud,
    tagline: "Your Personal Cloud, Fully Under Your Control",
    description: "Turn your own computer into a powerful personal cloud server. Store, share, and access your files from anywhere while maintaining full control of your data.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    url: "https://cloud.mysphere.co.in",
    features: [
      { icon: Monitor, title: "Self-Hosted Server", description: "Turn any PC into your own cloud server with zero cloud costs." },
      { icon: Upload, title: "File Management", description: "Upload, download, and preview files instantly from any device." },
      { icon: Share2, title: "Secure Sharing", description: "Share files securely using direct, expirable links." },
      { icon: Brain, title: "AI Organization", description: "AI-powered file categorization and smart tagging." },
      { icon: Search, title: "Smart Search", description: "Find any file instantly with tags, filters, and full-text search." },
      { icon: Clock, title: "Temporary Stash", description: "Quick-share files with auto-expiry timers." },
      { icon: Shield, title: "Secure Login", description: "Encrypted authentication to protect your data." },
      { icon: Smartphone, title: "Multi-Device", description: "Access from desktop, web, and mobile seamlessly." },
    ],
    howItWorks: [
      { step: 1, title: "Install myCloud", description: "Set up the myCloud server on any computer in minutes." },
      { step: 2, title: "Upload Your Files", description: "Drag and drop or browse to upload files to your personal cloud." },
      { step: 3, title: "Access Anywhere", description: "Open your files from any device through the web interface." },
      { step: 4, title: "Share Securely", description: "Generate secure links to share files with anyone." },
    ],
    integrations: ["myCam", "myLink"],
    platforms: [
      { name: "Web", status: "Active" },
      { name: "Desktop", status: "In Development" },
      { name: "Android", status: "Planned" },
      { name: "iOS", status: "Planned" },
    ],
  },
  mycam: {
    slug: "mycam",
    name: "myCam",
    icon: Camera,
    tagline: "Smart Security, Right From Your Smartphone",
    description: "Turn any smartphone into a smart CCTV camera or dashcam with remote access and cloud storage integration.",
    status: "In Development",
    statusColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    url: "https://cam.mysphere.co.in",
    features: [
      { icon: Smartphone, title: "Phone as CCTV", description: "Repurpose old smartphones as smart security cameras." },
      { icon: Video, title: "Remote Live Feed", description: "Watch live camera feeds from anywhere in real-time." },
      { icon: Activity, title: "Motion Detection", description: "Get instant alerts when motion is detected." },
      { icon: Cloud, title: "Cloud Backup", description: "Automatically back up footage to myCloud storage." },
      { icon: MessageSquare, title: "Two-Way Audio", description: "Communicate through the camera with built-in audio." },
      { icon: Eye, title: "Activity Zones", description: "Define specific areas for focused monitoring." },
    ],
    howItWorks: [
      { step: 1, title: "Install myCam App", description: "Download and install myCam on an old smartphone." },
      { step: 2, title: "Position Camera", description: "Place the phone where you need surveillance." },
      { step: 3, title: "Connect & Monitor", description: "View live feeds remotely from any device." },
      { step: 4, title: "Get Alerts", description: "Receive motion detection notifications instantly." },
    ],
    integrations: ["myCloud", "myLink"],
    platforms: [
      { name: "Web", status: "In Development" },
      { name: "Android", status: "Planned" },
      { name: "iOS", status: "Planned" },
      { name: "Desktop", status: "Planned" },
    ],
  },
  mytune: {
    slug: "mytune",
    name: "myTune",
    icon: Music,
    tagline: "A Cinematic Music Experience",
    description: "A modern music streaming and playback experience with intelligent queue management and a cinematic interface.",
    status: "Desktop App Available",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    url: "https://tune.mysphere.co.in",
    downloadUrl: "/myTune_exe_app/myTune.exe",
    features: [
      { icon: Music, title: "Music Streaming", description: "Stream music from online sources with high quality." },
      { icon: ListMusic, title: "Smart Queue", description: "Intelligent queue management that learns your preferences." },
      { icon: Heart, title: "Like & Dislike", description: "Train your music taste with simple interactions." },
      { icon: Palette, title: "Dynamic Artwork", description: "Beautiful album artwork that adapts to your screen." },
      { icon: Brain, title: "AI Playlists", description: "AI-powered playlist recommendations (coming soon)." },
      { icon: Search, title: "Music Library", description: "Organize and browse your full music collection." },
    ],
    howItWorks: [
      { step: 1, title: "Launch myTune", description: "Open the desktop application on your computer." },
      { step: 2, title: "Browse & Search", description: "Discover music from online sources or your library." },
      { step: 3, title: "Build Queues", description: "Create smart queues that adapt to your mood." },
      { step: 4, title: "Enjoy", description: "Experience music with a cinematic, immersive interface." },
    ],
    integrations: ["myCloud", "myLink"],
    platforms: [
      { name: "Desktop", status: "Active" },
      { name: "Web", status: "In Development" },
      { name: "Android", status: "Planned" },
      { name: "iOS", status: "Planned" },
    ],
  },
  mylink: {
    slug: "mylink",
    name: "myLink",
    icon: Link,
    tagline: "Seamless Device Connectivity",
    description: "Connect your phone and computer to sync notifications, clipboard data, and device activity seamlessly.",
    status: "Planned",
    statusColor: "text-muted-foreground bg-muted/50 border-border",
    url: "https://link.mysphere.co.in",
    features: [
      { icon: BellRing, title: "Notifications on PC", description: "See all phone notifications on your desktop instantly." },
      { icon: Clipboard, title: "Clipboard Sync", description: "Copy on phone, paste on desktop — and vice versa." },
      { icon: Brain, title: "AI Categorization", description: "Smart AI sorts notifications by priority and type." },
      { icon: ScanSearch, title: "Notification Search", description: "Search through all your past notifications easily." },
      { icon: Smartphone, title: "Cross-Device Sync", description: "Seamlessly sync activity across all your devices." },
      { icon: Bell, title: "Smart Alerts", description: "Only get notified about what matters most to you." },
    ],
    howItWorks: [
      { step: 1, title: "Install on Both Devices", description: "Set up myLink on your phone and computer." },
      { step: 2, title: "Pair Devices", description: "Securely connect your devices with one-tap pairing." },
      { step: 3, title: "Sync Automatically", description: "Notifications and clipboard sync in real-time." },
      { step: 4, title: "Stay Connected", description: "Never miss a notification while at your desk." },
    ],
    integrations: ["myCloud", "myCam", "myTune"],
    platforms: [
      { name: "Web", status: "Planned" },
      { name: "Desktop", status: "Planned" },
      { name: "Android", status: "Planned" },
      { name: "iOS", status: "Planned" },
    ],
  },
  mymoney: {
    slug: "mymoney",
    name: "myMoney",
    icon: Wallet,
    tagline: "Intelligent Personal Finance",
    description: "An intelligent finance manager that tracks expenses, builds budgets, and provides AI-powered financial insights.",
    status: "Planned",
    statusColor: "text-muted-foreground bg-muted/50 border-border",
    features: [
      { icon: DollarSign, title: "Expense Tracking", description: "Automatically log and categorize all your expenses." },
      { icon: PiggyBank, title: "Budget Management", description: "Create and manage budgets with smart suggestions." },
      { icon: Brain, title: "AI Assistant", description: "Get AI-powered financial advice and insights." },
      { icon: MessageSquare, title: "SMS Logging", description: "Auto-log transactions from bank SMS notifications." },
      { icon: TrendingUp, title: "Investment Tracking", description: "Monitor your investments and portfolio performance." },
      { icon: Activity, title: "Financial Reports", description: "AI-generated reports on your spending patterns." },
    ],
    howItWorks: [
      { step: 1, title: "Connect Accounts", description: "Link your bank accounts or enable SMS reading." },
      { step: 2, title: "Track Spending", description: "All transactions are automatically categorized." },
      { step: 3, title: "Set Budgets", description: "Create budgets and get alerts when you're close to limits." },
      { step: 4, title: "Get Insights", description: "AI analyzes your habits and suggests improvements." },
    ],
    integrations: ["myCloud"],
    platforms: [
      { name: "Web", status: "Planned" },
      { name: "Android", status: "Planned" },
      { name: "iOS", status: "Planned" },
    ],
  },
};
