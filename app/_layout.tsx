import { Stack, usePathname, useRootNavigationState, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const navState = useRootNavigationState();
  const pathname = usePathname();
  const isAuth = false;

  useEffect(() => {
    if (!navState?.key) return;
    const inAuth = pathname?.startsWith("/auth");
    if (!isAuth && !inAuth) {
      const id = setTimeout(() => router.replace("/auth"), 0);
      return () => clearTimeout(id);
    }
  }, [navState?.key, pathname, isAuth, router]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
