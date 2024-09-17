'use client'


function footer() {
  return (
    <div>
    <div>
      <footer className="footer footer-center bg-black p-4 fixed bottom-0">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by S. Ogbaje
          </p>
        </aside>
      </footer>
    </div>
    </div>
  );
}

export default footer;
