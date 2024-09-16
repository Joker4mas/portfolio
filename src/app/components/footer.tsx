'use client'


function footer() {
  return (
    <div>
      <footer className="footer footer-center bg-black p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by S. Ogbaje
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default footer;
