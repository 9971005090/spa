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
        <menu class="on">
            {{{leftMenu}}}
        </menu>
        <!-- //main-left-nav -->
        <!-- main-section -->
        <section>
            <div class="page-top"></div>
            <article></article>
        </section>
        <!-- // main-section -->
    </main>
    <!-- // wrap-cont -->
    
    <!-- footer -->
    <footer>
        {{{footer}}}
    </footer>
    <!-- // footer -->         
`;