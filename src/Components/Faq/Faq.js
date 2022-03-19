import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
const Wrapper = styled.div`
a{
    color:#fff;
    text-decoration:underline !important;
}
  .title {
    font-size: 3.75rem;
  }
  .faq-container {
    border: 1px solid var(--blue);
  }
  .question {
    font-size: 1.25rem;
    font-weight:500;
    color: #fff;
    background: rgba(1, 216, 254, 0.42);
    cursor:pointer;
  }
  .answer {
    background: rgba(1, 216, 254, 0.13); 
    font-weight:500;

    
  }
  .show {padding: 12px 12px;
    max-height: 1000px;
   transition:.5s;
  }
  }

  .hidden {
    max-height: 0px;
    padding: 0px 12px;

    overflow: hidden;

    transform-origin: top;
    transition: max-height 0.5s, font-size 0.4s,  padding 0.4s 0.4s;
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2.75rem;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 2.25rem;
    }
    .question {
    font-size: 1rem;
    font-weight:500;
    color: #fff;
    background: rgba(1, 216, 254, 0.42);
  }
  }
`;
const Faq = () => {
  const [value, setValue] = useState(null);
  const [arrow, setArrow] = useState(false);
  const faqArray = [
    {
      question: "What even is an NFT?",
      answer:
        "A Non-fungible token (NFT) is commonly used to provide proof of ownership of a digital asset. It is stored as a token on the blockchain, but unlike cryptocurrency, it is not interchangeable. Proving ownership of a Poker Shark Society NFT comes with a lot of perks. Keep reading!",
    },
    {
      question: "What are the benefits of owning a shark?",
      answer:
        "Your Poker Shark Society NFT is so much more than a fun collectible! Sharks will evolve to fully rigged 3D characters which can be used as your avatar in metaverses, supporting games, and apps. Your shark will also be your gateway to live events and giveaways including but not limited to crypto expert talks, exclusive poker coachings, poker training materials and tools. Check our roadmap, <a href='https://twitter.com/2222sharks' target='_blank' className='text'>twitter</a> , and  <a href='https://discord.com/invite/nFXwFjfff7' target='_blank' className='text'>discord</a>  for updates on specifics.",
    },
    {
      question: "How do I cop a shark?",
      answer:
        "To mint a shark, connect your metamask wallet to this website and press the mint button. <a href='https://pokersharksociety.com/static/media/how_to_guide.b6acb052.pdf' className='text' target='_blank'>For a detailed guide see here.</a> .",
    },
    {
      question: "How much?",
      answer: "All sharks will cost 0.11 ETH at the public sale.",
    },
    {
      question: "When is the drop?",
      answer: "The public sale goes live on February 22nd, 2022.",
    },
    {
      question: "Will there be a pre-sale?",
      answer:
        "Yes, early supporters of the project are added to the whitelist for our exclusive presale. The presale will have a discounted price of 0,06 ETH and be limited to a total of 222 sharks. Check our <a href='https://discord.com/invite/nFXwFjfff7' className='text' target='_blank'>discord</a>  for updates on specifics. for details.",
    },
    {
      question: "What if I want to buy a specific shark?",
      answer:
        "You can view your NFT on the  <a href='https://market.immutable.com/ target='_blank' className='text'>immutable.com </a>  marketplace.",
    },
    {
      question: "How do I receive my evolved 3D shark?",
      answer:
        "There is no guarantee that you will mint the shark you want. However, buyers will be allowed to mint a max of 5 sharks per wallet/transaction, increasing their odds of minting a rarer shark. You will be able to buy a specific shark on the secondary market at  <a href='https://market.immutable.com/ target='_blank' className='text'>immutable.com </a> ",
    },
    {
      question: "Where can I view my NFTs?",
      answer:
        "The evolution will take place once the collection has sold out. Evolved 3D sharks will be airdropped as NFTs to all shark holder wallets.",
    },
    {
      question: "Are NFTs a Scam/Bubble?",
      answer:
        "The technology behind non-fungible tokens in itself irrefutably enhances security, efficiency and utility to providing proof of ownership. That being said, a project is only as good and trustworthy as the concept and team standing behind it. Always do your due diligence and evaluate each project on a case by case basis. Unlike other NFT projects, the Poker Shark Society is fully transparent with team identities revealed.",
      answer2:
        "BE AWARE THAT THE BUZZ AROUND NFT/CRYPTO MARKETS ATTRACTS MANY INDIVIDUALS WITH CRIMINAL INTENTIONS, AND SCAMS ARE HIGHLY PREVALENT. NFT/CRYPTO MARKETS IN GENERAL ARE HIGHLY VOLATILE AND BEAR HIGH RISK.",
    },
    {
      question: "How much are the royalties?",
      answer:
        "To facilitate sufficient funding for holder benefits, royalties for secondary sales are 10% with the vast majority going to the community fund.",
    },
    {
      question: "Still have questions?",
      answer: `If you have any unanswered questions please read our <a href="https://pokersharksociety.com/static/media/SHARKPAPER.d1560f67.pdf" className="text" target='_blank'>sharkpaper</a> 
      , or simply open a ticket in our <a href='https://discord.com/invite/nFXwFjfff7' className='text' target='_blank'>discord</a> .`,
    },
  ];
  const show = (e) => {
    e.target
      .closest(".faq-container")
      .querySelector(".answer")
      .classList.toggle("show");
    e.target
      .closest(".faq-container")
      .querySelector(".answer")
      .classList.toggle("hidden");
  };

  return (
    <Wrapper className="py-5" id="faq">
      <Col xs={11} xxl={8} className="mx-auto">
        <h2 className="title">
          FAQ<span className="exlamation">!</span>
        </h2>
        <div>
          {faqArray.map((el, i) => (
            <div key={i} className="my-3 faq-container">
              <div
                className="question py-2 px-3 d-flex justify-content-between "
                onClick={(e) => {
                  setValue(i);
                  setArrow((prev) => !prev);
                  show(e);
                }}
              >
                <p className="">{el.question}</p>
                {value === i && arrow ? (
                  <BsCaretUpFill size={12} style={{ marginTop: "5px" }} />
                ) : (
                  <BsCaretDownFill size={12} style={{ marginTop: "5px" }} />
                )}
              </div>
              <div
                className="text answer hidden"
                dangerouslySetInnerHTML={{ __html: el.answer }}
              ></div>
            </div>
          ))}
        </div>
      </Col>
    </Wrapper>
  );
};
export default Faq;
