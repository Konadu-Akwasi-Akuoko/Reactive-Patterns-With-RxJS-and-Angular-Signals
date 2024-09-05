import { map, of } from "rxjs";

const source = of(1, 2, 3);
const result = source.pipe(
  map((value: number) => value + 1),
  map((value: number) => value + 1),
);

source.subscribe({
  next: (value) => {
    console.log(value);
  },
});

result.subscribe((value) => {
  console.log(value);
});

