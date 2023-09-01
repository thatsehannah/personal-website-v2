import React from "react"
import Letter from "../../../components/special/Letter"
import { useProjects } from "../../../utils/hooks/useProjects"

const IntroProjects = () => {
  const projectData = useProjects()
  const sliced = projectData.slice(0, 1)

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>
          <H2>
            What I've Be
            <Letter />n Up To
          </H2>
        </TitleWrapper>

        <ResumeWrapper workData={sliced} />
        <SeeMoreWrapper>
          <ButtonWrapper>
            <Link to="/portfolio">
              <MainButton text="See More" />
            </Link>
          </ButtonWrapper>
        </SeeMoreWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
