"use strict";
export const html = `
    <div id="wrap"> 
        <!-- header -->
        <header id="header" class="cm-header">
            {{{header}}}
        </header>
        <!-- //header -->
        <!-- wrap-cont -->
        <main id="wrap-cont">
            <!-- cm-left-nav -->
            <nav class="cm-left-nav">
                {{{leftMenu}}}
            </nav>
            <!-- //cm-left-nav -->
            <!-- cm-main-content -->
            <section class="cm-main-content" id="main-contents">
                <div class="page-nav">
                    <a href="/example-main/index" class="page-nav-link go-main-link">
                        <span class="fa fa-home"></span>
                    </a>
                    <span class="icon fa fa-angle-right"></span>   
                    <a href="javascript:void();" class="page-nav-link">Main</a>
                </div>
                <article id="main-cont"></article>
            </section>
            <!-- // cm-main-content -->
        </main>
        <!-- // wrap-cont -->
        
        <!-- footer -->
        <footer id="footer" class="cm-footer">
            {{{footer}}}
        </footer>
    </div>
    <!-- // parent container -->         
`;