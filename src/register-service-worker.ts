!(async () => {
    if (process.env.NODE_ENV === "production") {
        //@ts-ignore
        const { registerSW } = await import("virtual:pwa-register");

        if (
            location.hostname !== "localhost" &&
            "127.0.0.1" !== location.hostname
        ) {
            "serviceWorker" in navigator &&
                // window.addEventListener(
                //     "load",
                (function () {
                    const updateSW = registerSW({
                        onNeedRefresh() {},
                        onOfflineReady() {},
                    });
                    updateSW(true).catch(() => {});
                })();

            //     { once: true }
            // );
        }
    }
})();
