import { useState } from "react"
import questions from "../data/questiontriv"
import { Container, Preguntas, Row } from "./triviastyle"
import Poptriv from "../componentes/popup/Triviapop/Poptriv"

const Trivial = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const q = questions[currentQuestionIndex]

    return (
        <Container>
            <Preguntas>
                {
                    q.question
                }
            </Preguntas>
            <Row>
                <div>
                    {
                        q.answers.map((a, i) => <p key={i}><button onClick={() => {
                            if (a.isRight) {
                                setCurrentQuestionIndex(currentQuestionIndex + 1)
                            } else {
                                setCurrentQuestionIndex(currentQuestionIndex === 0 ? 0 : currentQuestionIndex - 1);
                            }
                        }}>x</button>{a.txt}</p>)
                    }
                </div>
                <img src={q.img} />
            </Row>
            <Poptriv visible={false} />
        </Container>
    )
}

export default Trivial
