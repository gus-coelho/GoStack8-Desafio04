import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Gustavo Coelho",
          avatar:
            "https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-9/60352321_2294614747260823_4593118294986194944_n.jpg?_nc_cat=109&_nc_oc=AQnKaFldZzmHBm8AIS6MLla_mE4qI3xY9legofU69-sABYPyymnt9xa9_yiZJfTGu2jNo8OCuNYxEKx2E2zkChLV&_nc_ht=scontent.fbfh3-2.fna&oh=b56865579fb3191e4113b80ecc030efc&oe=5E25C811"
        },
        date: "29 Set 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            date: "04 Jun 2019",
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Mestre Yoda",
          avatar:
            "http://statig0.akamaized.net/bancodeimagens/3h/41/7d/3h417dse5ihv5dsv9edtjagsy.jpg"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 4,
            author: {
              name: "Padmé Amidala",
              avatar:
                "https://pbs.twimg.com/profile_images/958679811425210368/h-NI9rZm.jpg"
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 5,
            author: {
              name: "C-3PO",
              avatar:
                "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/46/1479397679-c-3po-see-threepio-68fe125c.jpeg?crop=0.501xw:1.00xh;0.301xw,0&resize=480:*"
            },
            date: "04 Jun 2019",
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Kylo Ren",
          avatar:
            "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/P631751_01"
        },
        date: "04 Jun 2019",
        content:
          "Salve, seguidores da Rocketseat. Aqui é o seu líder-supremo. Desafio vocês para um duelo de programação. Enviem o seu melhor Jedi-programador!",
        comments: [
          {
            id: 4,
            author: {
              name: "Rae Skywalker",
              avatar:
                "https://media.comicbook.com/2019/07/star-wars-the-last-jedi-daisy-ridley-rey-1178621-640x320.jpeg"
            },
            date: "04 Jun 2019",
            content:
              "Em breve nos enfrentaremos, Kylo. E não restará pedra sobre pedra!"
          },
          {
            id: 5,
            author: {
              name: "Luke Skywalker",
              avatar: "https://i.imgflip.com/yz81v.jpg"
            },
            date: "04 Jun 2019",
            content:
              "Minha padawan, sinto que você está realmente preparada. Que a força esteja com você!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
