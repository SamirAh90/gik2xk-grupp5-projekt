import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-du mt-auto">
      <div className="container">
        <div className="row">


          {/* Sektion 2: Snabblänkar */}
          <div className="col-md-6 mb-4">
            <h5>Genvägar</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Produkter</Link></li>
              <li className="mb-2"><Link to="/cart">Gå till kassan (Varukorg)</Link></li>
              <li className="mb-2"><Link to="/login">Logga In</Link></li>
              <li className="mb-2"><Link to="/register">Skapa Kundkonto</Link></li>
            </ul>
          </div>

          {/* Sektion 3: Information om projektet */}
          <div className="col-md-6 mb-4">
            <h5>Om Webbshoppen</h5>
            <p style={{ color: '#a3b8cc', lineHeight: '1.6' }}>
              "Webbshoppen" är utvecklad som del av ett inlämningsprojekt i kursen
              Design av Webbapplikationer (GIK2XK) vid
              Högskolan Dalarna.
            </p>
            <div className="mt-3">
              <a href="https://www.du.se/" target="_blank" rel="noreferrer" className="text-decoration-underline" style={{ color: '#fff' }}>
                Besök du.se
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-2 mb-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright på botten */}
        <div className="text-center" style={{ fontSize: '0.85rem', color: '#6e8ba6' }}>
          &copy; {new Date().getFullYear()} Högskolan Dalarna - Projektgrupp 5. Detta är ett skolprojekt och inte en kommersiell e-handel.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
