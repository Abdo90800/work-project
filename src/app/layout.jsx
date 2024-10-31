// app/layout.js
import React from 'react';
import './globals.css'; // لو عندك ستايل عام

export const metadata = {
  title: 'عنوان الصفحة',
  description: 'وصف الصفحة',
};

const Layout = ({ children }) => {
  return (
    <html lang="ar">
      <body>
        <header>
          <nav>
            {/* روابط التنقل */}
          </nav>
        </header>
        <main>{children}</main>
        <footer>
        
        </footer>
      </body>
    </html>
  );
};

export default Layout;
