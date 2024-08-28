import {
  Title,
  Container,
  TopBar,
  Filters,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px] ">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6101F670D6AA756B1C989E0489.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6101F670D6AA756B1C989E0489.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6101F670D6AA756B1C989E0489.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 5,
                    name: "Паста Песто",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE797019062658A437457F8E1D5887.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6101F670D6AA756B1C989E0489.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D6101F670D6AA756B1C989E0489.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductsGroupList
                title="Коктейли"
                items={[
                  {
                    id: 5,
                    name: "Молочный коктейль Ежевика-малина",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EEB92C801211CBAF91BB30F77568C5.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Молочный коктейль Пина Колада",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EEA69C98929AD79D1ADB5EF4CF22BB.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "Классический молочный коктейль",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE796FA1F50F8F8111A399E4C1A1E3.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Молочный коктейль с печеньем Орео",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE796F93FB126693F96CB1D3E403FB.avif",
                    price: 440,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
