import PageTitle from "@/shared/components/PageTitle";
import userImage from "@/assets/user.png";
import { H4, P } from "@/shared/components/Typography";

export const About = () => {
  return (
    <div className="space-y-15 max-lg:px-5">
      <PageTitle titleClassName="normal-case!">John Doe</PageTitle>
      <main className="space-y-8">
        <img src={userImage} />
        <div>
          <H4>About Me</H4>
          <P>
            As a passionate and experienced UI designer, I am dedicated to
            creating intuitive and engaging user experiences that meet the needs
            of my clients and their users. I have a strong understanding of
            design principles and a proficiency in design tools, and I am
            comfortable working with cross-functional teams to bring projects to
            fruition. I am confident in my ability to create designs that are
            both visually appealing and functional, and I am always looking for
            new challenges and opportunities to grow as a designer.
          </P>
        </div>
        <div>
            <H4>Skills:</H4>
            <ul className="list-disc list-inside pl-3">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <li className="text-sm text-card-foreground" key={num}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  iusto accusantium odio alias, optio veritatis harum
                  voluptatum!
                </li>
              ))}
            </ul>
        </div>
        <div>
            <H4>Experence:</H4>
            <ul className="list-disc list-inside pl-3">
              {[1, 2, 3,4].map(() => (
                <li className="text-sm text-card-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  iusto accusantium odio alias, optio veritatis harum
                  voluptatum!
                </li>
              ))}
            </ul>
        </div>
        <div>
            <H4>Education:</H4>
            <ul className="list-disc list-inside pl-3">
              {[1, 2].map(() => (
                <li className="text-sm text-card-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  iusto accusantium odio alias, optio veritatis harum
                  voluptatum!
                </li>
              ))}
            </ul>
        </div>
      </main>
    </div>
  );
};
