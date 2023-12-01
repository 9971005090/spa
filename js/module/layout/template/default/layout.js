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
        <!-- main-section-content -->
        <section class="main-section-content" id="main-contents">
            <div class="page-top"></div>
            <article id="main-cont"></article>
        </section>
        <!-- // main-section-content -->
    </main>
    <!-- // wrap-cont -->
    
    <!-- footer -->
    <footer id="footer" class="cm-footer">
        {{{footer}}}
    </footer>
    <!-- // parent container -->         
`;