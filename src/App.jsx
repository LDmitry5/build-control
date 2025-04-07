import { Route, Routes } from "react-router";
import { Welcome } from "./pages/Welcome";
import { Engineers } from "./pages/Engineers";
import { Timing } from "./pages/Timing";
import { ApplicationForm } from "./pages/ApplicationForm";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { Confirmation } from "./pages/Confirmation";
import { Authentication } from "./pages/Authentication";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="auth" element={<Authentication />} />
        <Route
          index
          element={
            <RequireAuth>
              <Welcome />
            </RequireAuth>
          }
        />
        <Route
          path="engineers-choice"
          element={
            <RequireAuth>
              <Engineers />
            </RequireAuth>
          }
        />
        <Route
          path="timing"
          element={
            <RequireAuth>
              <Timing />
            </RequireAuth>
          }
        />
        <Route
          path="application-form"
          element={
            <RequireAuth>
              <ApplicationForm />
            </RequireAuth>
          }
        />
        <Route
          path="confirmation"
          element={
            <RequireAuth>
              <Confirmation />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export { App };
