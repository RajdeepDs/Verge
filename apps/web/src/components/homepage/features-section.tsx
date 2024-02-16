import DeploymentFeature from "./deployment-feat";
import DevelopmentEnvironment from "./dev-env";
import RealtimeFeature from "./realtime-feat";

export default function FeaturesSection(): JSX.Element {
  return (
    <div className="mt-52 flex flex-col gap-y-52">
      <DevelopmentEnvironment />
      <RealtimeFeature />
      <DeploymentFeature />
    </div>
  );
}
