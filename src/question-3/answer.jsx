import React from "react";

export default function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">Header</header>

      <div className="layout__main-area">
        <div className="layout__left">
          <section className="layout__hero">Hero</section>
          <nav className="layout__sidebar">sidebar</nav>
        </div>

        <div className="layout__right">
          <main className="layout__main">main</main>
          <aside className="layout__extra">extra</aside>
        </div>
      </div>

      <div className="layout__aside">
        <aside className="layout__related-images">images</aside>
        <aside className="layout__related-posts">posts</aside>
      </div>

      <footer className="layout__footer">Footer</footer>
    </div>
  );
}
