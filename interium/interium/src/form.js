import React from 'react'

function Form() {



<div style={divStyle}>
<p>ostavte zayavku i nash operator s vami svyajetsya</p>



<form onSubmit={handleSubmit(onSubmit)}>
 <p>
    imya
 </p>
<input type="text" name="imya" 
ref={register()}
 required onChange={(e) => {}}/>
 <p>
  nomer
 </p>
<input name="nomer" ref={register()} type="number"/>
<br/>
<br/>
<input type="submit" value="Отправить" />

</form>
<br/>
<br/>


</div>

}