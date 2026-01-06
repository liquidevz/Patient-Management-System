# CarePulse - Patient Management System

<div align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Environment Variables](#environment-variables)

## 🤖 Introduction

CarePulse is a modern healthcare patient management system that streamlines the appointment booking process. Built with Next.js 14, it features a beautiful, responsive UI with glassmorphism effects and smooth animations. The application allows patients to register, book appointments, and manage their healthcare journey, while providing administrators with powerful tools for scheduling and managing appointments.

## ⚙️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Appwrite** - Backend as a Service (BaaS)
- **ShadCN UI** - Re-usable component library
- **Twilio** - SMS notifications
- **Sentry** - Error tracking and monitoring

## 🔋 Features

### Patient Features
- ✅ **User Registration** - Create personal profile with medical information
- ✅ **Appointment Booking** - Schedule appointments with preferred physicians
- ✅ **Multiple Appointments** - Book and manage multiple appointments
- ✅ **SMS Notifications** - Receive appointment confirmations via SMS
- ✅ **Secure File Upload** - Upload identification documents securely

### Admin Features
- ✅ **Appointment Management** - View and manage all scheduled appointments
- ✅ **Appointment Confirmation** - Confirm and schedule appointment times
- ✅ **Appointment Cancellation** - Cancel appointments with reasons
- ✅ **Admin Dashboard** - Comprehensive overview of all appointments

### Design & UX
- ✅ **Modern Landing Page** - Beautiful hero section with gradient effects
- ✅ **Glassmorphism UI** - Premium design with backdrop blur effects
- ✅ **Smooth Animations** - Fade-in effects and hover interactions
- ✅ **Fully Responsive** - Works seamlessly on all devices
- ✅ **Dark Theme** - Professional dark mode design
- ✅ **Comprehensive Sections**:
  - How It Works (3-step process)
  - Our Doctors showcase
  - Why Choose Us features
  - Patient testimonials
  - Footer with contact info

## 🤸 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/liquidevz/Patient-Management-System.git
cd Patient-Management-System
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=your_project_id
API_KEY=your_api_key
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
DOCTOR_COLLECTION_ID=your_doctor_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Admin Configuration
NEXT_PUBLIC_ADMIN_PASSKEY=111111

# Twilio (Optional - for SMS notifications)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# Sentry (Optional - for error tracking)
SENTRY_DSN=your_sentry_dsn
```

4. **Set up Appwrite**

- Create an account on [Appwrite](https://appwrite.io/)
- Create a new project
- Create the required collections (Patient, Doctor, Appointment)
- Set up storage bucket for file uploads
- Copy your credentials to `.env.local`

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔐 Environment Variables

### Required Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_ENDPOINT` | Appwrite API endpoint |
| `PROJECT_ID` | Your Appwrite project ID |
| `API_KEY` | Appwrite API key with proper permissions |
| `DATABASE_ID` | Appwrite database ID |
| `PATIENT_COLLECTION_ID` | Patient collection ID |
| `APPOINTMENT_COLLECTION_ID` | Appointment collection ID |
| `NEXT_PUBLIC_BUCKET_ID` | Storage bucket ID for file uploads |
| `NEXT_PUBLIC_ADMIN_PASSKEY` | Admin access passkey |

### Optional Variables

| Variable | Description |
|----------|-------------|
| `DOCTOR_COLLECTION_ID` | Doctor collection ID (if using separate collection) |
| `TWILIO_ACCOUNT_SID` | Twilio account SID for SMS |
| `TWILIO_AUTH_TOKEN` | Twilio authentication token |
| `TWILIO_PHONE_NUMBER` | Twilio phone number |
| `SENTRY_DSN` | Sentry DSN for error tracking |

## 📱 Screenshots

### Landing Page
Modern hero section with glassmorphism form card and comprehensive content sections.

### Admin Dashboard
Powerful admin interface for managing all appointments with filtering and status updates.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liquidevz/Patient-Management-System)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/liquidevz/Patient-Management-System/issues).

## 👨‍💻 Author

**liquidevz**

- GitHub: [@liquidevz](https://github.com/liquidevz)
- Repository: [Patient-Management-System](https://github.com/liquidevz/Patient-Management-System)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Backend powered by [Appwrite](https://appwrite.io/)
- UI components from [ShadCN](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  Made with ❤️ by liquidevz
</div>