import { Route } from 'react-router-dom';

import { EMR, SignIn } from '@beda.software/emr/containers';
import { defaultMenuLayout } from '@beda.software/emr/dist/components/BaseLayout/Sidebar/SidebarTop/context';

const anonymousRoutes = <Route path="/signin" element={<SignIn originPathName={window.location.pathname} />} />;

export function App() {
    return <EMR menuLayout={defaultMenuLayout} anonymousRoutes={anonymousRoutes} />;
}
