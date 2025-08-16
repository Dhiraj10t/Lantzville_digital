import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ServiceRequestPortal from './pages/service-request-portal';
import CommunityLifeEvents from './pages/community-life-events';
import CouncilGovernanceTransparencyCenter from './pages/council-governance-transparency-center';
import EmergencyInformationSafetyHub from './pages/emergency-information-safety-hub';
import ResidentServicesHub from './pages/resident-services-hub';
import CommunityDashboardHomepage from './pages/community-dashboard-homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CommunityDashboardHomepage />} />
        <Route path="/service-request-portal" element={<ServiceRequestPortal />} />
        <Route path="/community-life-events" element={<CommunityLifeEvents />} />
        <Route path="/council-governance-transparency-center" element={<CouncilGovernanceTransparencyCenter />} />
        <Route path="/emergency-information-safety-hub" element={<EmergencyInformationSafetyHub />} />
        <Route path="/resident-services-hub" element={<ResidentServicesHub />} />
        <Route path="/community-dashboard-homepage" element={<CommunityDashboardHomepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
