/**
 * Mobile Browser Detection Script
 * Modified to always return desktop mode for iframe compatibility
 */

(function() {
    // Force desktop mode - always return false for mobile detection
    // This prevents the game from entering mobile/small screen mode
    // which was causing black screen issues in iframe environments
    
    window.isMobile = false;
    window.isTablet = false;
    window.isDesktop = true;
    
    // Common mobile detection functions that games might use
    window.detectMobile = function() {
        return false; // Always return false (not mobile)
    };
    
    window.detectTablet = function() {
        return false; // Always return false (not tablet)
    };
    
    window.detectDesktop = function() {
        return true; // Always return true (is desktop)
    };
    
    // jQuery mobile detection (if jQuery is available)
    if (typeof $ !== 'undefined') {
        $.isMobile = false;
        $.isTablet = false;
        $.isDesktop = true;
    }
    
    // Modernizr touch detection override
    if (typeof Modernizr !== 'undefined') {
        // Don't override Modernizr.touch as it might be used for actual touch capability
        // But we can add our own properties
        Modernizr.forcedDesktop = true;
        Modernizr.isMobileDevice = false;
    }
    
    // Override common mobile detection patterns
    var originalUserAgent = navigator.userAgent;
    
    // Create a custom userAgent property that doesn't match mobile patterns
    Object.defineProperty(navigator, 'userAgentOverride', {
        get: function() {
            // Return a desktop-like user agent
            return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
        },
        configurable: true
    });
    
    // Common mobile detection regex patterns - make them not match
    window.mobileRegex = /(?!.*)/; // Regex that never matches
    
    // Screen size override for games that check screen dimensions
    window.getEffectiveScreenWidth = function() {
        return Math.max(window.innerWidth, 1024); // Always return at least 1024px
    };
    
    window.getEffectiveScreenHeight = function() {
        return Math.max(window.innerHeight, 768); // Always return at least 768px
    };
    
    // Media query override for min-width checks
    if (window.matchMedia) {
        var originalMatchMedia = window.matchMedia;
        window.matchMedia = function(query) {
            // If it's checking for min-width: 1024px, always return true
            if (query.includes('min-width') && query.includes('1024')) {
                return {
                    matches: true,
                    media: query,
                    onchange: null,
                    addListener: function() {},
                    removeListener: function() {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    dispatchEvent: function() { return true; }
                };
            }
            // For other queries, use original function
            return originalMatchMedia.call(this, query);
        };
    }
    
    // Console log for debugging
    console.log('Mobile detection override active - forcing desktop mode');
    console.log('Effective screen size:', window.getEffectiveScreenWidth() + 'x' + window.getEffectiveScreenHeight());
    
})();
