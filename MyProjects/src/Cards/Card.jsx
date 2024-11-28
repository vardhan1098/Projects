import React from "react";
import CardInput from "../components/CardInput";

function Card() {
  return (
    <div>
      <h2>Profiles</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatem, similique labore libero qui veniam. Officiis nihil quis
          ipsam? Rem molestiae error iure cum commodi. Recusandae fugiat,
          aliquam atque aperiam expedita doloribus ex adipisci perspiciatis
          nobis facere similique amet officia unde consequuntur, maiores autem.
          Architecto recusandae quasi expedita ipsam sit officia aspernatur
          dolore doloribus aut nostrum magni beatae adipisci soluta, voluptate
          commodi nihil sed vitae libero tempora atque debitis eligendi
          obcaecati quibusdam! Fuga eaque corporis expedita cumque autem ut
          obcaecati.
        </p>
        <div style={{display:"flex",marginRight:'10px'}}>
        <CardInput/>
        <CardInput/>
        </div>
      </div>
    </div>
  );
}

export default Card;
