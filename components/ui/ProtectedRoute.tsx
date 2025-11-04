// "use client";
//
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
//
// export function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//
//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem("authToken");
//
//       if (!token) {
//         router.replace("/login");
//       } else {
//         setIsAuthenticated(true);
//       }
//       setIsLoading(false);
//     };
//
//     checkAuth();
//   }, [router]);
//
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-lg">Carregando...</div>
//       </div>
//     );
//   }
//
//   if (!isAuthenticated) {
//     return null;
//   }
//
//   return <>{children}</>;
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("🟢 ProtectedRoute: Verificando autenticação...");

    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      console.log(
        "🟢 ProtectedRoute: Token encontrado?",
        token ? "SIM" : "NÃO",
      );

      if (!token) {
        console.log("🔴 ProtectedRoute: Sem token, redirecionando para /login");
        router.replace("/login");
      } else {
        console.log("✅ ProtectedRoute: Autenticado!");
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    console.log("⏳ ProtectedRoute: Carregando...");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log("🔴 ProtectedRoute: Não autenticado, não renderiza nada");
    return null;
  }

  console.log("✅ ProtectedRoute: Renderizando conteúdo protegido");
  return <>{children}</>;
}
