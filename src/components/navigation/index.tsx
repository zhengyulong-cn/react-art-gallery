import MobileNavigation from "./MobileNavigation"
import PCNavigation from "./PCNavigation"
import { useIsMobile } from "@/hooks/flexible"

const Navigation = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <MobileNavigation /> : <PCNavigation />}
    </>
  )
}
export default Navigation