import { AyeohLogoSVG } from "@/components/AyeohLogoSVG.tsx";
export function NavBar() {
  return (
    <div class={`flex gap-5`}>
      <AyeohLogoSVG stroke={`text-indigo-500`}/>
      <div>Nav Bar</div>
    </div>
  );
}
