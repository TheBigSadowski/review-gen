# Peer Review Randomizer

Generates random peer review selections from a team roster.

Some of the guidelines for how it selects who should write reviews for who:

* Managers are not selected to review their direct reports
* Everyone will have the same number of reviews to write

## Dependancies

* underscore

## Installing & Running

    npm install underscore
    [hack the people array]
    node reviewers.js

This will write a list of each person and what peer reviews they should write.

## Hacking the Code

The two most important things to change for you are probably the `people` array and the `numberOfReviews` variable.

The `numberOfreviews` variable is pretty straightforward. Change this to assign each person with something other than the default of 4 peer reviews. This number needs to be greater than 0 and less than the number of people in your list.

The `people` array is a bit more complex. It represents all the people on the team and identifies if there are any direct reports within the team by calling out the manager for individuals if needed.

Here is a basic `people` array:

    var people = [
        humperdink = { name: 'Prince Humperdink' },
        rugen = { name: 'Count Rugen' },
        westley = { name: 'Westley' },
        fezzik = { name: 'Fezzik' },
        inigo = { name: 'Inigo Montoya' },
        vizzini = { name: 'Vizzini' }
    ]

This creates a team of 6 with no reporting structures between any of them. In this setup, the code will not exclude anyone from writing anyone else's review.

However, if our team is more complex, and we have many reporting structures in place, we might have something more like this:

    var people = [
        humperdink = { name: 'Prince Humperdink' },
        rugen = { name: 'Count Rugen', manager: humperdink },
        westley = { name: 'Westley' },
        fezzik = { name: 'Fezzik', manager: humperdink },
        inigo = { name: 'Inigo Montoya', manager: westley },
        vizzini = { name: 'Vizzini' }
    ]

This would exclude Westley from reviewing Inigo and would exclude Prince Humperdink from writing reviews for Count Rugen and Fezzik. Other than that, the selections will be random.

It is important to note that managers should be defined in the list first, since they are referred to in construction of the other people. However, this will not change how reviews are assigned, since we shuffle the list before starting to assign reviews anyway.