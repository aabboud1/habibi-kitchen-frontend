import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div>
                <h2>What our customers say</h2>
                <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
                {/* <!-- Indicators --> */}
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                {/* <!-- Wrapper for slides --> */}
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                    <h4><img className='pic' src="data:image/jpeg;base64,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" /></h4>
                    
                    </div>
                    <div class="item">
                    <h4><img className='pic' src="https://malloryontravel.com/wp-content/uploads/2011/04/Iain_Mallory_003601.jpg"></img></h4>
                    </div>
                    <div class="item">
                    <h4><img className='pic' src="https://previews.123rf.com/images/mathess/mathess1412/mathess141200743/34750689-olive-stall-at-a-market-in-meknes-morocco.jpg"></img></h4>
                    </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>  
            </div>
        );
    }
}

export default Carousel;