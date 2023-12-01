"use strict";
export const html = `
    <!-- header -->
    <header id="header" class="header">
        {{{header}}}
    </header>
    <!-- //header -->
    <!-- wrap-cont -->
    <main>
        <!-- main-left-nav -->
        <nav class="main-left-nav">
            {{{leftMenu}}}
        </nav>
        <!-- //main-left-nav -->
        <!-- main-section -->
        <section class="main-section" id="main-contents">
            <div class="page-top"></div>
            <article id="main-cont"></article>
        </section>
        <!-- // main-section -->
    </main>
    <!-- // wrap-cont -->
    
    <!-- footer -->
    <footer id="footer" class="footer">
        {{{footer}}}
    </footer>
    <!-- // parent container -->         
`;