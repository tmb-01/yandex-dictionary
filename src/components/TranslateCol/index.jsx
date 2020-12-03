import React from "react"
import {
    Comma,
    Example, Gen,
    Mean, MinusSign, Number,
    Pos, Syn, Tr,
    TranslateColWrapper,
    TranslatedWord,
    TranslateWord,
    TranslateWordBox,
    TranslateWordPronunciation
} from "./styles";

function TranslateCol({translated}) {
    return (
        <TranslateColWrapper>
            {
                translated?.def?.map(({text, pos, ts, tr}) =>
                    <>
                        <TranslateWordBox>
                            <TranslateWord>
                                {text}
                            </TranslateWord>
                            <TranslateWordPronunciation>
                                [{ts}]
                            </TranslateWordPronunciation>
                            <Pos>
                                {pos}
                            </Pos>
                        </TranslateWordBox>

                        {tr?.map(({text, pos, gen, syn, mean, ex}, trIndex) =>
                            <>
                                <TranslatedWord>
                                    {tr.length>1 &&
                                        <Number>
                                            {trIndex + 1}
                                        </Number>
                                    }
                                    <Tr>
                                        {text}
                                        {gen && <Gen>
                                            {gen}
                                        </Gen>}
                                        <Comma>
                                            {syn ? "," : ''}
                                        </Comma>
                                    </Tr>

                                    {syn?.map(({text, pos, gen}, synIndex) =>
                                        <Syn>
                                            {text}
                                            {gen &&
                                            <Gen>
                                                {gen}
                                            </Gen>}
                                            <Comma>
                                                {syn.length - 1 !== synIndex ? "," : ''}
                                            </Comma>
                                        </Syn>
                                    )}

                                </TranslatedWord>
                                {mean &&
                                <Mean>
                                    ({mean.map(({text},meanIndex) => <span>{text}{mean.length-1!==meanIndex && " "}</span>)})
                                </Mean>
                                }

                                {ex &&
                                <Example>
                                    {ex.map(({text,tr}) =>
                                        <p>
                                            {text}
                                            <MinusSign>-</MinusSign>
                                            {tr && tr.map(({text})=><span>{text}</span>)}
                                        </p>
                                    )}
                                </Example>
                                }


                            </>
                        )}

                        <Example>

                        </Example>
                    </>
                )
            }
        </TranslateColWrapper>
    )
}

export default TranslateCol