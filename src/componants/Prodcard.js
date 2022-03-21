import Link from "next/link";
import Products from "./Prods";
export default function Productcard() {
  return (
    <div className="flex py-3 m-2 mt-12 max-w-lg mx-auto grid  lg:grid-cols-3 lg:max-w-none">
      <Products
        className="py-3"
        price="189"
        btntext="Get Niche Edits"
        img={"/NICHE EDITS.jpg"}
        url="/NicheEdits"
        description="Niche edits are a vital way of placing your content into already well-established domains through personal outreach, relationship building and, most importantly, content fit "
      />

      <Products
        className="py-3"
        price="189"
        btntext="Get Guest Posts"
        img={"/GUEST POSTS.jpg"}
        url="/guest-posts"
        description="Guest posts are a fantastic way to expose your brand to a whole new audience by securing backlinks on incredibly relevant, authoritative domains."
      />

      <Products
        className="py-3"
        price="456"
        btntext="Get Digital PR"
        img={"/DIGITAL PR.jpg"}
        url="/Digital-Pr"
        description="Aligning your business values with a digital press release strategy is a great way to connect with your audience by translating your ethos into consumable media across relevant social channels. "
      />
    </div>
  );
}
