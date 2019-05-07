import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})

export class SearchPipe implements PipeTransform {
	transform(clocks, value) {
		return clocks.filter(clock => {
			return clock.title.toLowerCase().includes(value.toLowerCase())
		})
	}
}