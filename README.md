# Structure
```bash
src
├── api                # Infrastructure - API calls
│   └── categories
├── application        # Domain - Business object and use cases
│   └── categories
├── index.tsx
├── react-app-env.d.ts
├── server             # Infrastructure - Frontend server to intercept https calls
│   ├── handlers
│   └── worker.ts
├── setupTests.ts
├── store              # Infrastructure - Storage logic specific to storage of application
│   ├── categories
│   ├── categories.slice.ts
│   ├── selectors      # Selectors - How we can find data in storage
│   │   ├── get-all-ids-categories.selector.ts
│   │   ├── get-categories.selector.ts
│   │   ├── get-category-by-id.selector.ts
│   │   └── get-display-categories.selector.ts
│   ├── thunks         # Adapters - Logic that links domain and infrastructure
│   │   ├── create-category.thunk.ts
│   │   ├── delete-category-by-id.thunk.ts
│   │   ├── get-categories.thunk.ts
│   │   ├── get-category-by-id.thunk.ts
│   │   └── update-category-by-id.thunk.ts
│   ├── library
│   └── loading
└── web                # UI Infrastructure
    ├── articles
    ├── categories     # Categories UI Module
    │   ├── components # Shared Categories Components
    │   ├── categories-list
    │   └── category-form
    ├── hooks          # Services for interact with Infrastructure Layers
    │   ├── use-categories.ts
    │   ├── use-category.ts
    │   ├── use-create-category.ts
    │   ├── use-delete-category.ts
    │   ├── use-search-categories.ts
    │   └── use-udpate-category.ts
    ├── routes         # Routes
    │   └── categories.router.tsx
    ├── views          # Views that used in Routes
    │   ├── categories.view
    │   ├── category.view
    │   ├── create-category.view
    │   └── update-category.view
    ├── library        # Shared UI Module
    │   │   ├── components # Shared Components
    │   │   ├── back-button
    │   │   ├── content
    │   │   ├── global-styles
    │   │   ├── header
    │   │   └── list-actions
    │   ├── hooks         # Shared Services
    │   │   ├── use-loading.ts
    │   │   ├── use-main-dispatch.ts
    │   │   ├── use-main-selector.ts
    │   │   ├── use-messages.tsx
    │   │   └── use-required-context.ts
    │   ├── utils
    │       └── service-worker.ts
    └── main
```

# What is it and why it is important?

**First of all what is architecture?**
Architecture means the linking of components in system, organizing code units in groups with related purpose. 

**What definition of good architecture?**
Good architecture refers to organizing system components in a way that you can easily understand and change, add new features and maintain existed. The architecture should guide the developer and tell him how to evolve application.

Main indicator of good architecture it that with time add new features or support existed become easier or the same as in the beginning of development.
This can happen only with intentional planning and understating or invention principles that will guid you.

Fortunately, such principles were already invented by cleaver guys that programming and creating software more that most of use live :)

Disclaimer: This is not strict rules but recommendation to play with, recommendation that we can creative and create own rules to follow.

**Why we need it?**
To make changes, code and logic of application predictable and understandable for team and new comers.

# Principles

Common principle is structure system components in a way  can change independently of other components.

The image below illustrates bad architecture and hight components coupling:

![1.png](https://s1.imghub.io/sP4Zy.png)

If you want to replace the scissors with a knife, what do you have to do? You have to untie the strings that go to the pen, the ink bottle, the tape and the compass. Then you have to retie those items to a knife. Maybe that works for the knife, but what if the pen and the tape say, "Wait, we needed scissors." So now the pen and the tape don't work and have to be changed, which in turn affects the objects tied to them. It's a mess.

Compare to system with low coupling, where to make a change you need to make minimal movements:

![2.png](https://s1.imghub.io/sPKyJ.png)

Now how do we replace the scissors? We only have to pull the scissors’ string out from under the Post-it notes and add a new string that is tied to a knife. Way easier. The Post-it notes don't care because the string wasn't even tied to it.

Tis is a utopia and in reality everything is more complicated, but this is an ideal to strive for so that over time we would enjoy development instead of suffering.

# General

To create system that we can easily maintain wen must divide it on **domain** and **infrastructure** layers.

![3.png](https://s1.imghub.io/sP1G1.png)

**Domain Layer**
In this layer we put all logic that business rules, this means in the essence of what your application does, the core functionality of the code. For example how order change cart when status changed or how balance changes when some item was added to card. This rules tend to be stable since you will not change core business rules.

**Infrastructure Layer**
This layer indicated where our business rules in running: on mobile, web, server. Or which tools we use to store, retrieve and display data: UI Frameworks, Storage(Redux, Database), APIs. This thing are more likely to change than domain. How button will look, which data type use to store, what service call to retrieve data.

Domain doesn't know anything about infrastructure and where it's running, Web, Backend, Mobile.  It doesn't matter what we use to display data, how we store it and transfer thought net.  But infrastructure depends on domain. This makes it a plugin architecture, we plug tools to our domain, how it display, how it store. This makes it easy to change the infrastructure.

The main purpose of the Clean Architecture is the Dependency Rule, how layers of application interacts. From top top bottom direction that our dependencies should point to. The high-level(in center) policies are defined as the core of our application, the components that are independent of any programming language or technology, the policies that only need to change when our domain changes, that is, only in very specific cases.

![4.png](https://s1.imghub.io/sPjaH.png)

# Domain

Here the domain layer is divided into **entities** and **use cases**, and an **adapter layer** forms the border between the domain and the infrastructure layer. Adapters take input, data, event from interface and call use cases that know business rules.

![5.png](https://s1.imghub.io/sPr7k.png)

## Entities

An entity is a set of related business rules that are critical to the function of the application. In an object oriented programming language the rules for an entity would be grouped together as methods in a class. Even if there were no application, these rules would still exist. For example we have product and some operations that we can do on it, change price, make disabled.  Entities are the business objects of the application. They encapsulate the most general and high-level rules. They are the least likely to change when something external changes.

## Use cases

The use cases are the business rules for a specific application. They tell how to automate the system. This determines the behavior of the app. For example add product to card and change balance, it's union card with products and balance. The use cases interact with and depend on the entities, but they know nothing about the layers further out. They don't care if it's a web page or an iPhone app. They don't care if the data is stored in the Redux or in LocalStorage, or take from API.

The software in this layer contains *application specific* business rules. It encapsulates and implements all of the use cases of the system. These use cases orchestrate the flow of data to and from the entities, and direct those entities to use their *enterprise wide* business rules to achieve the goals of the use case.

### Adapters

The adapters, also called interface adapters, are the translators between the domain and the infrastructure. For example they take data from action/ui pass to use case and then store.

The software in this layer is a set of adapters that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Storage, API or UI. It is this layer, for example, that will wholly contain the MVC architecture of a GUI. The Presenters, Views, and Controllers all belong in here. The models are likely just data structures that are passed from the controllers to the use cases, and then back from the use cases to the presenters and views.

### Infrastructure

This layer is where all the I/O components go: the UI, database, frameworks, devices, etc. It's the most volatile layer. Since the things in this layer are so likely to change, they are kept as far away as possible from the more stable domain layers. Because they are kept separate, it's relatively easy make changes or swap one component for another.

This layer is where all the details go. The Web is a detail. The Storage is a detail. We keep these things on the outside where they can do little harm.

<h1 align="center">Recommendations</h1>

<blockquote align="center">
“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler
</blockquote>

<p align="center">
    <img src="https://media.giphy.com/media/l8aCBaBuz5R6M/giphy.gif" alt="Recommendations" />
</p>

## Main
- [ ] [SOLID :sunglasses:](https://www.mohitkhare.com/blog/solid-dry-kiss-yagni/) 
- [ ] [Clean architecture for the rest of us :trophy:](https://pusher.com/tutorials/clean-architecture-introduction)

## Next
- [ ] [Creator Funny Video :trollface:](https://www.youtube.com/watch?v=2dKZ-dWaCiU)
- [ ] [Main Principles :+1:](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [ ] [JS Clean Code :eyes:](https://github.com/ryanmcdermott/clean-code-javascript)
