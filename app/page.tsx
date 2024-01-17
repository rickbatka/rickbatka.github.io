

export default function Home() {
  return (
    <main className='flex flex-col w-full bg-[#f1f1f1] place-items-center text-black tracking-wider'>
      {/* Hero title */}
      <div className="w-full flex min-h-32 max-w-7xl py-10 px-8">
        <h1 className="text-6xl font-bold text-gray-800 tracking-widest">Rick Batka</h1>
      </div>
      <div className="w-full flex flex-col bg-[#3b3b3b] place-items-center py-2">
        <div className="flex w-full max-w-7xl text-white text-left px-8">
          Gameplay Engineering Portfolio
        </div>
      </div>
      
      {/* Projects List */}
      <div className="flex flex-col w-full min-h-screen bg-[#84fafb] place-items-center place-content-left text-gray-800 pt-10">
        <div className="w-full max-w-7xl flex flex-col gap-4 text-left px-8">

          {/* Project #1 */}
          <h1 className="text-4xl w-full text-left font-extrabold ">Project 1: Movement &amp; Combat System with Melee &amp; Gun</h1>
          <div className="bg-gray-800 text-white w-full text-center md:h-96 lg:h-[500px] overflow-y-hidden flex flex-col place-content-end">
            <video src="/Portfolio1.mp4" autoPlay loop playsInline muted className="-mb-10" />
          </div>

          <p className="italic text-center">Unreal Engine 5, C++, Blueprints. Solo project, inspired by Remnant: From the Ashes 2</p>
          <h2 className="text-4xl">Description</h2>
          <p>
            Inspired by <em>Remnant: From the Ashes 2</em>, I set out to create a similar movement system that tackled the problem of seamless switching between gun and melee combat.
            I wanted to explore how one might implement a melee lock-on system, while still supporting seamless and smooth transition to ADS gun combat. For this, I eventually settled on
            what is shown in the video: lock-on effect is simply toggled off when aiming the gun. I found this felt natual when switching from <em>Dark Souls</em> style melee combat to
            <em>Gears of War</em> style gun combat. I also wanted to explore the UE5 animation blending sytem and hone my abilities in creating fluid moment-to-moment gameplay
            with &ldquo;juicy&rdquo; game-feel, tight controls, and smooth transitions.
          </p>
          <h2 className="text-4xl">Features</h2>
          <p><strong>Melee Combo System with Pre-emption: </strong>Melee attacks are locked in, until a preemption window where they can be cancelled. Subsequent attack inputs during the preemption window continue the combo. Animators can adjust the preemption window in the montage timeline.</p>
          <p><strong>Souls-like Combat: </strong>Over-the-shoulder camera seamlessly transitions between melee mode (with lock-on) and aim-down-sights. Weapon switching is automatic, as in Remnant: Toggling aiming fluidly switches between melee and ranged combat modes.</p>
          <p><strong>IK Gun Recoil & Spread: </strong>Configurable recoil and spread parameters jolt and jostle the gun realistically. IK rig keeps arms realistically attached.</p>
          <p><strong>Dodge Roll I-Frames: </strong>Animators can tweak invincibility timings right in the montage timeline editor. Actors and ActorComponents can easily register for AnimStateNotify events with a simple but powerful composition approach.</p>
          <p><strong>Lock-On System: </strong>Character remains facing target, switches to blended strafing animation. Seamlessly switches back and forth.</p>
          <p><strong>Dynamic Camera Effects: </strong>Screen shake intensity is influenced by gun strength (which also drives recoil and spread). FOV + Zoom animation helps smoothe out the transition between melee and gun.</p>

          {/* Project #2 */}
          <h1 className="text-4xl w-full text-left font-extrabold ">Project 2: Unreal Plugin for SpatialOS </h1>
          <div className="bg-gray-800 text-white w-full text-center md:h-80 lg:h-96 overflow-y-hidden flex flex-col place-content-center">
            <video src="/Portfolio2.mp4" autoPlay loop playsInline muted className="-mb-10" />
          </div>
          <p className="italic text-center">Unreal Engine 4, C++. Team Size: 2.</p>
          <h2 className="text-4xl">Description</h2>
          <p>
            Improbable&apos;s SpatialOS was a scalable game and simulation back-end for massive scale interactive experiences, often showcasing 1 million+
            complex actors being simulated in real time. Improbable needed a way to showcase interoperability with game engines in their scale demos - in this case, Unreal Engine 4.
            This particular demo used open source city data to show 500,000 civilians going about their normal pattern-of-life in a real city.
            Civilians would enter and exit buildings and react to emergency situations by seeking shelter before returning to their normal pattern of life.
          </p>
          <p>
            Knowing that Unreal can struggle to render hundreds of actors, we used a combination of tricks to
            render the closest 5,000 entities to the player at any given time at 60fps on an average gaming laptop.
          </p>
          <h2 className="text-4xl">Features</h2>
          <p>
            <strong>500k Complex Actors Simulated: </strong>
            Using SpatialOS&apos;s distributed Entity Component System, we were able to write agent behaviors that scaled to massive numbers. By dividing the world spacially (a.k.a. Geo-Sharding), we could scale nearly indefinitely.
            </p>
          <p>
            <strong>Unreal Plugin Architecture: </strong>We built a general-purpose plugin for viewing large SpatialOS simulation in Unreal. The plugin took over the networking
            for any proxy actors controlled by SpatialOS. It featured a dynamic property mapping GUI that utilized Unreal&apos;s reflection system to make it easy to
            map SpatialOS data fields to their Unreal UPROPERTY counterparts.
          </p>
          <p>
            <strong>5k Animated Entities on Screen in Unreal at 60fps: </strong>
            We used instanced static meshes with pre-baked animations to render thousands of entities in Unreal. With a handful of skinned meshes and a small set of 
            pre-baked animations, the visual variability was convincing despite no true Unreal &ldquo;Actors&rdquo; in the scene.
          </p>
          <p>
            <strong>Interest-Based Data Culling: </strong>We used SpatialOS&apos; &ldquo;killer feature&rdquo; - its infintely scalable spatial querying system - to limit the entities
            in view to the closest 5,000 to the camera. The entities in view were seamlessly loaded and destroyed as the camera moved around the world.
          </p>
          <p>
            <strong>Complex Pathfinding AI for 500,000 Entities: </strong>
            The simulation back-end featured 500k entities navigating around the city using efficient A-Star (A*) pathfinding as they moved from building to building.
            The navigation mesh was built from OpenStreetMap road and sidewalk data, which we processed and turned into an efficient geographically sharded
            set of smaller NavMesh instances that each simulation worker could use.
          </p>
          <p>
            <strong>Selectable Buildings: </strong>
            Our city mesh contained tens of thousands of buildings within a single mesh and was performant enough to show all of New York City at once,
            but without separate meshes for each building, we were challenged to find a way to let the user highlight and inspect buildings.
            We baked unique building IDs as UV coordinates into the vertices that represented buildings. This let us quickly find all relevant
            faces for the currently selected building to recolor it and show some metadata to enhance the simulation.
          </p>
          
          

        </div>
              {/* Footer */}
      <div className="w-full flex h-52">&nbsp;</div>
      </div>
    </main>
  );
}
