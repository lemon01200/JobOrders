import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import { ModalProvider, useModal } from './context/ModalContext';
import HomePage from './pages/HomePage';
import SamplePage from './pages/SamplePage';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const { isOpen, variant, closeModal } = useModal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sample" element={<SamplePage />} />
            <Route
              path="/signup"
              element={
                <PlaceholderPage
                  title="Start Your Free Trial"
                  description="Sign up for JobOrders and get 5 scored job orders delivered every weekday at 7:30 AM. No credit card required for the first 14 days."
                />
              }
            />
            <Route
              path="/login"
              element={
                <PlaceholderPage
                  title="Log In"
                  description="Access your JobOrders account."
                />
              }
            />
            <Route
              path="/about"
              element={
                <PlaceholderPage
                  title="About JobOrders"
                  description="Built for independent recruiters and boutique agencies who'd rather close than search."
                />
              }
            />
            <Route
              path="/blog"
              element={
                <PlaceholderPage
                  title="Recruiter Playbook"
                  description="Tips, strategies, and insights for independent recruiters."
                />
              }
            />
            <Route
              path="/privacy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="How we handle and protect your data."
                />
              }
            />
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms of Service"
                  description="Terms and conditions for using JobOrders."
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PlaceholderPage
                  title="Contact Us"
                  description="Get in touch with the JobOrders team."
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <SignupModal isOpen={isOpen} onClose={closeModal} variant={variant} />
      </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/JobOrders">
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </BrowserRouter>
  );
}