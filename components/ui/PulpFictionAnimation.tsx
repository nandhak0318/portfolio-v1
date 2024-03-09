"use client"
import React, { useEffect } from 'react';
import "./pulpfiction.scss"
function PulpFictionAnimation() {
  useEffect(()=>{
    shoot()
  },[])
  return (
    <div className="pulp-fiction">
      <div className="vincent pf-vincent-1"></div>
      <div className="jules pf-jules-1"></div>
    </div>
  );
}

function shoot() {
	setTimeout(function(){
		document.querySelector('.vincent')?.classList.add( "pf-vincent-gun");
		document.querySelector('.jules')?.classList.add( "pf-jules-gun");
		setTimeout(bullet, 500);
		setTimeout(bullet, 1500);
		setTimeout(function(){ 
			document.querySelector('.vincent')?.classList.remove( "pf-vincent-gun");
			document.querySelector('.jules')?.classList.remove( "pf-jules-gun");
			shoot();
		}, 3000);
	}, 1000);
}

function bullet(){
	document.querySelector('.vincent')?.classList.add( "pf-vincent-fire");
	document.querySelector('.jules')?.classList.add( "pf-jules-fire");

	setTimeout(function(){ 
		document.querySelector('.vincent')?.classList.remove( "pf-vincent-fire");
		document.querySelector('.jules')?.classList.remove( "pf-jules-fire");
	}, 500);
}

export default PulpFictionAnimation;
