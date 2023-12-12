"use strict";
export const html = `
    <!-- header -->
    <header>
        {{{header}}}
    </header>
    <!-- // header -->
    
    <!-- wrap-cont -->
    <main>
        <!-- main-left-nav -->
        <menu>
            {{{leftMenu}}}
        </menu>
        <!-- //main-left-nav -->
        <!-- main-section -->
        <section class="main-section" id="main-contents">
            <div class="page-top"></div>
            <article></article>
        </section>
        <!-- // main-section -->
    </main>
    <!-- // wrap-cont -->
    
    <!-- footer -->
    <footer id="footer" class="footer">
        {{{footer}}}
    </footer>
    <!-- // footer -->         
`;