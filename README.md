# Arya Pratibha Vikas Sansthan (APV)

> Institutional Website Redesign for **Arya Pratibha Vikas Sansthan (APV / APVS)** — An initiative of Arya Samaj (145+ Years). Dedicated to identifying, mentoring, and sponsoring deserving civil service aspirants for UPSC (IAS, IPS, IFS, IRS) and State Public Services.

Official source of truth: [pratibhavikas.org](https://pratibhavikas.org/)

---

## 🏛️ Design Philosophy & Principles

- **Swiss Modernist Institutional Grid**: Inspired by high-end design benchmarks like `leafdesign.co`, utilizing a strict 12-column asymmetric layout with generous vertical whitespace (`120–180px`).
- **Institutional Color System**:
  - Collegiate Oxford Navy (`#162E5A`, `#102042`)
  - Warm Ivory / Editorial Parchment (`#F6F5F1`, `#FFFFFF`)
  - Deep Slate Ink (`#1A1D24`, `#2D323E`)
  - Restrained Warm Vedic Gold (`#D4A026`, `#F1C40F`)
- **Typography**:
  - **Satoshi** (Bold, Medium, Regular) via Fontshare
- **Curved Modular Architecture**:
  - Pill badges and buttons (`rounded-pill` / `rounded-full`)
  - Smooth rounded cards (`rounded-[24px]` to `rounded-[32px]`)
- **Prominent Stakeholder Showcase**:
  - Dedicated spotlight for **Arya Samaj** and **Maharishi Dayanand Saraswati**.
  - Leadership and inspiration tribute for industrialist & philanthropist **Shri S.K. Arya** (Chairman, JBM Group) and **Padma Bhushan Mahashay Dharampal**.
- **Factual Integrity**:
  - Strictly 100% verified facts, numbers, selection pathways, campus addresses, and alumni records from `pratibhavikas.org`. Zero fictitious claims.

---

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** (Bundler with GitHub Pages base path configuration)
- **Tailwind CSS** (Custom tokenized theme with institutional palette & Satoshi font)
- **Radix UI Primitives** (Accessible Dialog, Accordion, Slot)
- **Lucide React** (Clean vector line icons)
- **GitHub Actions** (Continuous deployment to GitHub Pages on push to `main`)

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript check and production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 GitHub Pages Deployment

The repository is configured with automated deployment via **GitHub Actions** (`.github/workflows/deploy.yml`).

Whenever changes are pushed to the `main` branch, the workflow triggers automatically:
1. Checks out the repository
2. Sets up Node.js 20
3. Installs dependencies (`npm ci`)
4. Builds the project (`npm run build`)
5. Deploys the `./dist` bundle to GitHub Pages at:
   `https://v1khyat.github.io/Arya-Pratibha-Vikas/`

### Configuring GitHub Pages in Repository Settings

If not enabled automatically:
1. Navigate to your repository on GitHub: `https://github.com/V1KHYAT/Arya-Pratibha-Vikas`
2. Go to **Settings** > **Pages**
3. Under **Build and deployment** > **Source**, select **GitHub Actions**
4. The workflow will now automatically deploy on every push to `main`.
