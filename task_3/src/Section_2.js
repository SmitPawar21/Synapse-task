import filterImg from "./images/filter.svg";
import {Card} from "./Card";

export const Section_2 = ()=>{

    return (
    <div className='section_2'>

      <div className='filter_area'>
        <div className='filter_title'>
          <img src={filterImg} />
          <h2>Filters</h2>
        </div>

        <div className='filter_element' id='offers'>
          <h3>Offers</h3>
          <div>  <input type='radio' id='a' name='offer' value='abcde' />
          <label id='a'> abcdef ghij klmnop </label>  </div>
          <div>  <input type='radio' id='b' name='offer' value='abcde' />
          <label id='b'> abcdef ghij klmnop </label>  </div>
          <div>  <input type='radio' id='c' name='offer' value='abcde' />
          <label id='c'> abcdef ghij klmnop </label>  </div>
          <div>  <input type='radio' id='d' name='offer' value='abcde' />
          <label id='d'> abcdef ghij klmnop </label>  </div>
        </div>

        <div className='filter_element' id='price'>
          <h3>Prices</h3>
          <div>  <input type='radio' id='e' name='price' value='abcde' />
          <label id='e'> Under 50,000  </label>  </div>
          <div>  <input type='radio' id='f' name='price' value='abcde' />
          <label id='f'> Under 20,000  </label>  </div>
          <div>  <input type='radio' id='g' name='price' value='abcde' />
          <label id='g'> Under 10,000  </label>  </div>
          <div>  <input type='radio' id='h' name='price' value='abcde' />
          <label id='h'> Above 20,000  </label>  </div>
        </div>

        <div className='filter_element' id='size'>
          <h3>Display Size</h3>
          <div>  <input type='radio' id='a' name='size' value='abcde' />
          <label id='a'> 5.0" - 5.9" </label>  </div>
          <div>  <input type='radio' id='b' name='size' value='abcde' />
          <label id='b'> 6.0" - 6.9" </label>  </div>
          <div>  <input type='radio' id='c' name='size' value='abcde' />
          <label id='c'> 7.0" - 7.9" </label>  </div>
          <div>  <input type='radio' id='d' name='size' value='abcde' />
          <label id='d'> Above 8.0" </label>  </div>
        </div>

        <div className='filter_element' id='storage'>
          <h3>Storage</h3>
          <div>  <input type='radio' id='a' name='storage' value='abcde' />
          <label id='a'> 32 GB </label>  </div>
          <div>  <input type='radio' id='b' name='storage' value='abcde' />
          <label id='b'> 64 GB </label>  </div>
          <div>  <input type='radio' id='c' name='storage' value='abcde' />
          <label id='c'> 128 GB </label>  </div>
          <div>  <input type='radio' id='d' name='storage' value='abcde' />
          <label id='d'> 256 GB </label>  </div>
        </div>

        <div className='filter_element' id='camera'>
          <h3>Camera</h3>
          <div>  <input type='radio' id='a' name='camera' value='abcde' />
          <label id='a'> Dual Camera </label>  </div>
          <div>  <input type='radio' id='b' name='camera' value='abcde' />
          <label id='b'> Triple Camera </label>  </div>
          <div>  <input type='radio' id='c' name='camera' value='abcde' />
          <label id='c'> Quad Camera </label>  </div>
        </div>

      </div>

      <div className='card_area'>

        <Card/>

      </div>

    </div>
    );

}