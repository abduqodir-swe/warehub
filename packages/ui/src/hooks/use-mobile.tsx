import { useSyncExternalStore } from 'react';

const MOBILE_BREAKPOINT = 768;
const MOBILE_MEDIA_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

function mediaQueryListener(callback: (event: MediaQueryListEvent) => void) {
    if (typeof window === 'undefined') {
        return () => {};
    }

    const mql = window.matchMedia(MOBILE_MEDIA_QUERY);

    mql.addEventListener('change', callback);

    return () => {
        mql.removeEventListener('change', callback);
    };
}

function isSmallerThanBreakpoint(): boolean {
    return (
        typeof window !== 'undefined' &&
        window.matchMedia(MOBILE_MEDIA_QUERY).matches
    );
}

function getServerSnapshot(): boolean {
    return false;
}

export function useIsMobile(): boolean {
    return useSyncExternalStore(
        mediaQueryListener,
        isSmallerThanBreakpoint,
        getServerSnapshot,
    );
}
