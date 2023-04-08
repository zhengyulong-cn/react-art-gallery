import { PC_DEVICE_WIDTH } from "@/constants";
import { useEffect, useState } from "react";

type SizeT = {
  width: number
  height: number
}
const defaultSize: SizeT = {
  width: 0,
  height: 0,
}
export function useWindowSize(): SizeT {
  const [size, setSize] = useState<SizeT>(defaultSize);
  const handleResize = () => {
    setSize({
      width: window.document.documentElement.clientWidth,
      height: window.document.documentElement.clientHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return size
}

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { width } = useWindowSize();
  useEffect(() => {
    setIsMobile(width < PC_DEVICE_WIDTH)
  }, [width])
  return isMobile;
}
