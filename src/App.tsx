import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop'; // Importe o ScrollToTop
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Servicos } from './pages/Servicos';
import { Pacotes } from './pages/Pacotes';
import { Processo } from './pages/Processo';
import { Portfolio } from './pages/Portfolio';
import { Contato } from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      {/* Adicione o ScrollToTop logo após o BrowserRouter */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-gradient-to-b from-[#070607] to-[#050505] text-white">
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
          
          :root {
            --black: #000000;
            --bg: #070607;
            --white: #ffffff;
            --muted: #bfc3c8;
            --glass: rgba(255,255,255,0.04);
            --glass-strong: rgba(255,255,255,0.08);
            --glass-border: rgba(255,255,255,0.06);
            --purple: #844ef1;
            --purple-2: #a77bff;
            --radius: 14px;
            --shadow-1: 0 8px 30px rgba(0,0,0,0.6);
            --blur: 14px;
            --maxw: 1200px;
            --font: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          }

          * {
            box-sizing: border-box;
          }

          html, body, #root {
            min-height: 100vh;
            height: 100%;
            margin: 0;
            overflow-x: hidden;
            background: #070607;
          }

          body {
            margin: 0;
            font-family: var(--font);
            color: var(--white);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1.45;
            overflow-x: hidden;
            background: #070607;
          }

          .container {
            width: 100%;
            max-width: var(--maxw);
            margin: 0 auto;
            padding: 0 20px;
          }

          header {
            position: sticky;
            top: 0;
            z-index: 60;
            background: linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.10));
            border-bottom: 1px solid rgba(255,255,255,0.03);
            backdrop-filter: blur(6px);
          }

          .nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 0;
            flex-wrap: wrap;
            gap: 14px;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: inherit;
            min-width: 0;
          }

          nav {
            flex: 1 1 auto;
            min-width: 0;
          }

          nav a {
            color: var(--muted);
            text-decoration: none;
            margin-left: 18px;
            transition: color 0.2s ease;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .logo-mark {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            background: linear-gradient(135deg, var(--purple), var(--purple-2));
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0b0612;
            box-shadow: 0 8px 30px rgba(140,82,255,0.18);
          }

          .brand small {
            display: block;
            color: var(--muted);
            margin-top: -4px;
          }

          nav a {
            color: var(--muted);
            text-decoration: none;
            margin-left: 18px;
            transition: color 0.2s ease;
          }

          nav a:hover, nav a.active {
            color: var(--purple);
          }

          .cta-btn {
            background: linear-gradient(135deg, var(--purple), var(--purple-2));
            color: #0b0612;
            padding: 10px 16px;
            border-radius: 10px;
            border: 0;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(140,82,255,0.18);
            transition: transform 0.2s ease;
          }

          .cta-btn:hover {
            transform: translateY(-2px);
          }

          .hero {
            display: grid;
            grid-template-columns: 1fr 520px;
            gap: 28px;
            align-items: center;
            padding: 64px 0;
          }

          .hero-left h1 {
            margin: 0 0 12px;
            color: var(--purple);
            line-height: 1.02;
          }

          .hero-left p {
            color: var(--muted);
            max-width: 64ch;
          }

          .hero-actions {
            margin-top: 18px;
            display: flex;
            gap: 12px;
          }

          .glass {
            background: linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.015));
            border-radius: var(--radius);
            border: 1px solid var(--glass-border);
            box-shadow: var(--shadow-1);
            backdrop-filter: blur(var(--blur)) saturate(120%);
          }

          .hero-right {
            padding: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mock-3d {
            width: 100%;
            height: 360px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            background:
              radial-gradient(600px 300px at 10% 10%, rgba(140,82,255,0.16), transparent 20%),
              radial-gradient(500px 260px at 90% 90%, rgba(139,82,255,0.08), transparent 20%),
              linear-gradient(180deg, #0b0a0f, #070607);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--muted);
          }

          .mock-3d .device {
            width: 80%;
            height: 70%;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.03);
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(180deg, rgba(255,255,255,0.015), transparent);
            box-shadow: 0 12px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
          }

          .badge {
            position: absolute;
            right: 18px;
            bottom: 18px;
            padding: 8px 12px;
            border-radius: 999px;
            background: linear-gradient(135deg, var(--purple), var(--purple-2));
            color: #0b0612;
            box-shadow: 0 8px 30px rgba(140,82,255,0.12);
          }

          .services {
            padding: 48px 0;
          }

          .grid3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          .card {
            padding: 20px;
            border-radius: 12px;
            border: 1px solid var(--glass-border);
            background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          }

          .card h3 {
            margin: 0 0 10px;
            color: var(--white);
          }

          .card p {
            margin: 0;
            color: var(--muted);
          }

          .packages {
            padding: 48px 0;
          }

          .pkg-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
          }

          .pkg {
            padding: 18px;
            border-radius: 12px;
            border: 1px solid var(--glass-border);
            background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
            transition: transform .28s ease, box-shadow .28s ease;
          }

          .pkg:hover {
            transform: translateY(-6px);
            box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 6px 18px rgba(140,82,255,0.06);
          }

          .pkg .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .pkg .price {
            color: var(--purple);
          }

          .highlight {
            background: linear-gradient(135deg, var(--purple), var(--purple-2));
            color: #0b0612;
            padding: 8px 10px;
            border-radius: 10px;
            box-shadow: 0 12px 40px rgba(140,82,255,0.12);
          }

          .pkg ul {
            margin: 12px 0 0;
            padding-left: 16px;
            color: var(--muted);
            line-height: 1.45;
          }

          .process {
            padding: 48px 0;
          }

          .steps {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 12px;
          }

          .step {
            padding: 14px;
            border-radius: 12px;
            border: 1px solid var(--glass-border);
            background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          }

          .step h4 {
            margin: 0 0 6px;
          }

          .step p {
            margin: 0;
            color: var(--muted);
          }

          .portfolio {
            padding: 48px 0;
          }

          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }

          .thumb {
            height: 160px;
            border-radius: 10px;
            background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
            border: 1px solid var(--glass-border);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--muted);
          }

          .contact {
            padding: 48px 0;
          }

          form {
            padding: 18px;
            border-radius: 12px;
            border: 1px solid var(--glass-border);
            background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          }

          input, textarea, select {
            width: 100%;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.04);
            background: rgba(255,255,255,0.02);
            color: var(--white);
            margin-top: 8px;
          }

          textarea {
            min-height: 120px;
          }

          .form-grid {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 18px;
          }

          footer {
            padding: 28px 0;
            color: var(--muted);
            border-top: 1px solid rgba(255,255,255,0.03);
          }

          .link-ghost {
            color: var(--muted);
            text-decoration: underline dotted;
          }

          .kicker {
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          @media (max-width: 1024px) {
            .hero {
              grid-template-columns: 1fr;
              gap: 18px;
            }
            .pkg-grid {
              grid-template-columns: 1fr;
            }
            .grid3 {
              grid-template-columns: 1fr;
            }
            .steps {
              grid-template-columns: 1fr 1fr;
            }
            .portfolio-grid {
              grid-template-columns: 1fr;
            }
            .form-grid {
              grid-template-columns: 1fr;
            }
            nav {
              display: none;
            }
            .cta-btn {
              min-width: 0;
              width: auto;
              flex: 0 1 auto;
            }
            .brand {
              min-width: 0;
            }
          }

          @media (max-width: 480px) {
            .hero-left h1 {
              font-size: 28px;
            }
            .logo-mark {
              width: 40px;
              height: 40px;
            }
            nav {
              justify-content: center;
              width: 100%;
            }
            nav a {
              font-size: 14px;
              margin-left: 8px;
              margin-right: 8px;
            }
            .nav {
              gap: 10px;
            }
            .cta-btn {
              display: none;
            }
          }
        ` }} />

        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/pacotes" element={<Pacotes />} />
            <Route path="/processo" element={<Processo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}