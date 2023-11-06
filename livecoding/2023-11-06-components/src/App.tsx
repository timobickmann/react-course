import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ImageBox } from "./components/ImageBox";
import { Dropdown } from "./components/Dropdown";
import * as exampleData from "./exampleData";
import { ScoreCard } from "./components/ScoreCard";
import { Wrapper } from "./components/Wrapper";
import { useState } from "react";

export const App = () => {
const [favourite, setFavourite] = useState("");

  return (
    <>
      <Header />
      <p>Welcome to this site.</p>

      <Wrapper title="Images">
        <ImageBox
          highlighted={true}
          stars={3}
          title="Paris Trip"
          imageFile="paris.png"
          body="We had a great time in Paris."
        />
        <ImageBox
          stars={5}
          title="China Trip"
          imageFile="city.png"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae nisi ratione repellendus dolorum ea officia nam, consequuntur, sunt similique dolores quidem iste voluptates adipisci quam suscipit expedita odio commodi!"
        />
      </Wrapper>
      <Wrapper title="Countries">
        <Dropdown choices={exampleData.countries} />
      </Wrapper>
      <Wrapper title="Scores">
        <div className="flex flex-wrap gap-1">
          {exampleData.playerResults.map((playerResult) => (
            <ScoreCard setFavourite={setFavourite} playerResult={playerResult} />
          ))}
        </div>
				<p>Favourite: {favourite}</p>
      </Wrapper>
      <Footer />
    </>
  );
};
