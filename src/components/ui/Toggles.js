import React from 'react'
import styled from 'styled-components'
import { white, color4, color3 } from '../../theme/theme'
import { darken } from 'polished'

export const Toggles = () => {
  return (
    <StyledToggles>
      <div>
        <div className="toggle style1">
          <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1"><span /></label>
        </div>

        <div className="toggle style2">
          <input type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2"><span /></label>
        </div>

        <div className="toggle style3">
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3"><span /></label>
        </div>

        <div className="toggle style4">
          <input type="checkbox" id="checkbox4" />
          <label htmlFor="checkbox4"><span /></label>
        </div>
      </div>
    </StyledToggles>
  )
}
export default Toggles

const StyledToggles = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  /* ALL TOGGLES */
  .toggle {
    height: 4rem;
  }
  .toggle input[type=checkbox]{
    display: none;
  }
  .toggle span {
    /* space between label and toggle */
    padding-left: .5rem;
  }
  .toggle label span::before,
  .toggle label span::after {
    position: absolute;
  }
  .toggle label span::before {
    /* off label text */
    content: 'OFF';
  }
  .toggle input[type=checkbox]:checked + label span::before {
    /* on label text */
    content: 'ON';
  }

  /* STYLE 1 */
  .style1 label {
    color: ${darken(0.2, color4)};
    display: block;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    transition: all .2s ease;
    position: relative;
    line-height: 2rem;
  }
  .style1 label::before {
    content: '';
    position: absolute;
    left: 0;
    transform: translateX(-3.8rem);
    width: 3rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: ${darken(0.2, color4)};
    transition: all .2s ease;
    box-shadow: inset -1px -1px 5px 3px rgba(0,0,0,.2);
    border: 1px solid #c4c7c3;
  }
  .style1 label::after {
    content: '';
    position: absolute;
    left: 0;
    transform: translate(-3.6rem, .15rem);
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 1rem;
    background-color: ${white};
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.1);
    transition: all .2s ease;
    border: 1px solid #c4c7c3;
  }
  .style1 input[type=checkbox]:checked + label {
    color: ${darken(0.2, color3)};
  }
  .style1 input[type=checkbox]:checked + label::before {
    background-color: ${darken(0.2, color3)};
  }
  .style1 input[type=checkbox]:checked + label::after {
    transform: translate(-2.7rem, .15rem);
  }

  /* STYLE 2 */
  .style2 label {
    color: ${darken(0.2, color4)};
    display: block;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    transition: all .2s ease;
    position: relative;
    line-height: 2rem;
  }
  .style2 label::before {
    content: '';
    position: absolute;
    left: 0;
    transform: translate(-3.8rem, .4rem);
    width: 3rem;
    height: 1.2rem;
    border-radius: .4rem;
    background-color: ${darken(0.2, color4)};
    transition: all .2s ease;
    box-shadow: inset -1px -1px 5px 3px rgba(0,0,0,.2);
    border: 1px solid #c4c7c3;
  }
  .style2 label::after {
    content: '';
    position: absolute;
    left: 0;
    transform: translate(-3.9rem, .05rem);
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1rem;
    background-color: ${white};
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,.1);
    transition: all .2s ease;
    border: 1px solid #c4c7c3;
  }
  .style2 input[type=checkbox]:checked + label {
    color: ${darken(0.2, color3)};
  }
  .style2 input[type=checkbox]:checked + label::before {
    background-color: ${darken(0.2, color3)};
  }
  .style2 input[type=checkbox]:checked + label::after {
    transform: translate(-2.6rem, .05rem);
  }

  /* STYLE 3 */
  .style3 label {
    color: ${darken(0.2, color4)};
    display: block;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    transition: all .2s ease;
    position: relative;
    line-height: 2rem;
  }
  .style3 label::before {
    content: '';
    position: absolute;
    left: 0;
    transform: translateX(-3.7rem);
    width: 3rem;
    height: 2rem;
    border-radius: .2rem;
    background-color: ${darken(0.2, color4)};
    transition: all .2s ease;
    box-shadow: inset -1px -1px 5px 3px rgba(0,0,0,.2);
    border: 1px solid #c4c7c3;
  }
  .style3 label::after {
    content: '';
    position: absolute;
    left: 0;
    transform: translate(-3.5rem, .15rem);
    width: 1.7rem;
    height: 1.7rem;
    border-radius: .2rem;
    background-color: ${white};
    transition: all .2s ease;
    border: 1px solid #c4c7c3;
  }
  .style3 input[type=checkbox]:checked + label {
    color: ${darken(0.2, color3)};
  }
  .style3 input[type=checkbox]:checked + label::before {
    background-color: ${darken(0.2, color3)};
  }
  .style3 input[type=checkbox]:checked + label::after {
    transform: translate(-2.6rem, .15rem);
  }

  /* STYLE 4 */
  .style4 label {
    color: ${darken(0.2, color4)};
    display: block;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    transition: all .2s ease;
    position: relative;
    line-height: 2rem;
  }
  .style4 label::before {
    content: '';
    position: absolute;
    left: 0;
    transform: translate(-3.8rem, .5rem);
    width: 3rem;
    height: 1.2rem;
    border-radius: .2rem;
    background-color: ${darken(0.2, color4)};
    transition: all .2s ease;
    box-shadow: inset -1px -1px 5px 3px rgba(0,0,0,.2);
    border: 1px solid #c4c7c3;
  }
  .style4 label::after {
    content: '';
    position: absolute;
    left: 0;
    transform: translate(-3.9rem, .1rem);
    width: 1.8rem;
    height: 1.8rem;
    border-radius: .2rem;
    background-color: ${white};
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,.1);
    transition: all .2s ease;
    border: 1px solid #c4c7c3;
  }
  .style4 input[type=checkbox]:checked + label {
    color: ${darken(0.2, color3)};
  }
  .style4 input[type=checkbox]:checked + label::before {
    background-color: ${darken(0.2, color3)};
  }
  .style4 input[type=checkbox]:checked + label::after {
    transform: translate(-2.6rem, .1rem);
  }
`;