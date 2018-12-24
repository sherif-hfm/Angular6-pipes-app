import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false, // this make angular run the pipe when data is changed but it may be preformance problem
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr: string): any {
    if(value.length ===0 || filterStr == '')
      return value;
    let result=[];
    for(let item of value)
    {
      console.log(item.name.indexOf(filterStr,0));
      if(item.name.indexOf(filterStr,0) > -1  )
      {
        console.log(item.name);
        result.push(item);
      }
    }
    return result;
  }
}
